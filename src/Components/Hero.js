import React from "react";
import heroImage from "../Assets/Images/banner.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="min-h-screen relative bg-center bg-cover bg-no-repeat  bg-black bg-opacity-50">
        <img
          src={heroImage}
          className="absolute w-full h-full z-[-1]   "
          alt="hero-bg"
        />
        <div className="z-10 w-full h-full relative  ">
          <h1 className="text-7xl uppercase absolute left-40 top-40  font-[Barlow Condensed] relative px-6 py-10   z-20  font-black text-white bg-[#fd8700] w-[500px] h-[400px]">
            We are leader in construction work
          </h1>
          <button className="text-xl font-semibold absolute left-44 top-96 mt-16 ml-3 px-8 py-4 z-20 bg-[#181818] text-white uppercase">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};
