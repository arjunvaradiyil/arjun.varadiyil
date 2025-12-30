import React from "react";

const HeroImage = () => {
  return (
    <div className="relative w-80 md:w-[340px] aspect-[0.714286/1]">
      {/* Back Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img
          src="https://c.animaapp.com/mg0le636yAWRYq/assets/VRQgkdWsjawSg1qpCm45HfSY1I.jpeg"
          alt="Portrait of portfolio creator – back view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Front Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img
          src="https://c.animaapp.com/mg0le636yAWRYq/assets/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg"
          alt="Portrait of portfolio creator – front view"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
