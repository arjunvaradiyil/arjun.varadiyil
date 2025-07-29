'use client';

import React, { useEffect, useState } from 'react';

const RainDrop = ({ left, top, animationDelay, animationDuration }: { left: string, top: string, animationDelay: string, animationDuration: string }) => (
  <div
    className="absolute bg-gradient-to-b from-transparent to-white/50 w-px h-16"
    style={{
      left,
      top,
      animation: `fall ${animationDuration} linear ${animationDelay} infinite`,
    }}
  />
);

const Rain = () => {
  const [drops, setDrops] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = Array.from({ length: 100 }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * -100}%`;
        const animationDelay = `${Math.random() * 5}s`;
        const animationDuration = `${0.5 + Math.random() * 0.5}s`;
        return <RainDrop key={i} left={left} top={top} animationDelay={animationDelay} animationDuration={animationDuration} />;
      });
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {drops}
    </div>
  );
};


const WeatherAnimation = () => {
  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = (lat: number, lon: number) => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          const weatherCode = data.current_weather.weathercode;
          if (weatherCode >= 51 && weatherCode <= 67 || weatherCode >= 80 && weatherCode <= 82) {
            setWeather('Rain');
          } else {
            setWeather(null);
          }
        })
        .catch(console.error);
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        }, () => {
          // Fallback to a default location if user denies permission
          fetchWeather(25.276987, 55.296249); 
        });
      } else {
        // Fallback for browsers that don't support geolocation
        fetchWeather(25.276987, 55.296249);
      }
    };

    getLocation();
  }, []);

  if (weather === 'Rain') {
    return <Rain />;
  }

  return null;
};

export default WeatherAnimation; 