import React from "react";

const HeroImage = () => {
  return (
    <div className="relative w-80 md:w-[340px] aspect-[0.714286/1]">
      {/* Back Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img
          src="/assets/images/profilepic.png"
          alt="Portrait of portfolio creator – back view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Front Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img
          src="/assets/images/profilepic.png"
          alt="Portrait of portfolio creator – front view"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
