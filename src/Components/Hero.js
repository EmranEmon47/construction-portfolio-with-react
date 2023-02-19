import React from "react";
import heroImage from "../Assets/Images/banner.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="relative min-h-[430px] bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover lg:min-h-screen">
        {/* background image */}
        <img
          src={heroImage}
          className="absolute w-full lg:h-full h-full z-[-1]   "
          alt="hero-bg"
        />

        {/* hero text */}
        <div className="relative z-10 w-full h-full  lg:w-[520px] lg:h-[300px] left-0 top-72 pt-10  px-2 lg:px-8 lg:py-12 pb-9  opacity-75 lg:opacity-100 lg:left-40 lg:top-44   bg-[#fd8700]">
          <h1
            className="lg:text-7xl text-5xl uppercase  font-[Barlow Condensed] opacity-100   z-20 font-bold  lg:font-black text-center lg:text-start   text-white "
          >
            We are leader in construction work
          </h1>
          
        </div>
      </div>
    </div>
  );
};
