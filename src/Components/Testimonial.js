import React from "react";
import testimonialPhoto1 from "../Assets/Images/testimonial1.jpg";
import testimonialPhoto2 from "../Assets/Images/testimonial2.jpg";

export const Testimonial = () => {
  return (
    <div className="min-h-screen py-16">
      <h5 className="uppercase text-lg text-center text-[#fd8700] ">
        CLIENT TESTIMONAILS
      </h5>
      <h1 className="text-7xl text-black font-semibold uppercase text-center">
        WHAT THEY ARE SAYING <br /> ABOUT OUR COMPANY
      </h1>
      <div className="flex justify-between items-center gap-12 px-28 py-20">
        <div className="flex flex-col justify-center items-center bg-[#181818] py-8 px-8">
          <div>
            <img src={testimonialPhoto1} className="rounded-full w-20" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white py-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsam minima, fugiat exercitationem nihil possimus
              dicta praesentium asperiores illum! Ducimus.
            </p>
            <p className="text-white">Company Name</p>
            <p className="text-[#fd8700]">CEO</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#181818] py-8 px-8">
          <div>
            <img src={testimonialPhoto2} className="rounded-full w-20 py-2" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white py-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsam minima, fugiat exercitationem nihil possimus
              dicta praesentium asperiores illum! Ducimus.
            </p>
            <p className="text-white">Company Name</p>
            <p className="text-[#fd8700]">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
