import React from "react";
import heroImage from "../Assets/Images/banner.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="relative min-h-[400px] bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover lg:min-h-screen">
        <img
          src={heroImage}
          className="absolute w-full lg:h-full h-full z-[-1]   "
          alt="hero-bg"
        />
        <div className="relative z-10 w-full h-full ">
          <h1
            className="lg:text-7xl text-5xl uppercase absolute left-0 top-64 pt-12 px-2 lg:left-40 lg:top-40  font-[Barlow Condensed] relative lg:px-8 lg:py-12   z-20 font-bold  lg:font-black text-white lg:bg-[#fd8700] lg:w-[520px] lg:h-[300px]"
          >
            We are leader in construction work
          </h1>
          
        </div>
      </div>
    </div>
  );
};
