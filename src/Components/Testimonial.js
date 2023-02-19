import React from "react";
import testimonialPhoto1 from "../Assets/Images/testimonial1.jpg";
import testimonialPhoto2 from "../Assets/Images/testimonial2.jpg";
import phoneBook from '../Assets/Images/phonebook.png';

export const Testimonial = () => {
  return (
    <div className="min-h-screen py-8 lg:py-14">

      {/* heading */}
      <h5 className="uppercase text-lg lg:text-center px-2 text-[#fd8700] ">
        CLIENT TESTIMONAILS
      </h5>
      <h1 className="px-2 text-5xl font-medium text-black uppercase lg:font-semibold lg:text-center lg:text-7xl">
        WHAT THEY ARE SAYING <br /> ABOUT OUR COMPANY
      </h1>

      {/* testimonial box */}
      <div className="flex flex-col items-center justify-between gap-4 px-2 py-8 lg:flex-row lg:gap-12 lg:py-16 lg:px-28">
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
      <div className="flex items-center justify-center bg-[#181818] py-4 px-2 w-fit mx-auto">
        <img src={phoneBook} className='w-12 lg:w-20' alt="img" /> <p className="px-4 text-xl font-semibold text-[#fd8700] lg:text-3xl">For all quotes call: <a href="tel:+0XXXXXXXXX"><br /> <small className="text-xl font-semibold text-white lg:text-3xl">+0XXXXXXXXXXX</small></a></p>
      </div>
    </div>
  );
};
