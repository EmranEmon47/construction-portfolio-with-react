import React from "react";
import testimonialPhoto1 from "../Assets/Images/testimonial1.jpg";
import testimonialPhoto2 from "../Assets/Images/testimonial2.jpg";
import butterfly from '../Assets/Images/65254-butterfly.gif';

export const Testimonial = () => {
  return (
    <div className="min-h-screen py-14">
      <h5 className="uppercase text-lg text-center text-[#fd8700] ">
        CLIENT TESTIMONAILS
      </h5>
      <h1 className="font-semibold text-center text-black uppercase text-7xl">
        WHAT THEY ARE SAYING <br /> ABOUT OUR COMPANY
      </h1>
      <div className="flex items-center justify-between gap-12 py-16 px-28">
        <div className="flex flex-col justify-center items-center bg-[#181818] py-8 px-8">
          <div>
            <img src={testimonialPhoto1} className="w-20 rounded-full" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="py-4 text-lg text-white ">
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
            <img src={testimonialPhoto2} className="w-20 py-2 rounded-full" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="py-4 text-lg text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsam minima, fugiat exercitationem nihil possimus
              dicta praesentium asperiores illum! Ducimus.
            </p>
            <p className="text-white">Company Name</p>
            <p className="text-[#fd8700]">CEO</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img src={butterfly} className='w-36 ' alt="img" /> <p className="px-4 text-3xl font-semibold text-[#fd8700]">For all quotes call: <a href="tel:+0XXXXXXXXX">0XXXXXXXXX</a></p>
      </div>
    </div>
  );
};
