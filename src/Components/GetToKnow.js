import React from "react";
import getKnowImage from "../Assets/Images/get-to-know.jpg";

export const GetToKnow = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-4 lg:gap-4 lg:flex-row lg:px-36">
      {/* image part */}
      <div className="basis-1/2">
        <img src={getKnowImage} className="lg:w-[700px] w-full " alt="get-to-know" />
      </div>

      {/* description part */}
      <div className="px-4 basis-1/2">
        <small className="uppercase text-lg text-[#fd8700]">Get to know us</small>
        <h1 className="text-5xl font-semibold text-black uppercase lg:text-7xl">
          WE’RE BUILDING THE GREATEST FUTURE NOW
        </h1>
        <p className="py-4 text-lg lg:py-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          eveniet explicabo! Saepe, provident? Placeat, temporibus! Eos aliquam
          similique rem harum consectetur odio deserunt earum nisi voluptatibus,
          asperiores nobis incidunt consequuntur reiciendis veritatis adipisci
          rerum animi perspiciatis saepe soluta exercitationem facilis maiores,
          numquam temporibus dolorum? Cupiditate deleniti sed non illum facilis?
        </p>
        <button
          className="text-xl font-semibold hover:bg-black hover:text-white   px-8 py-4  bg-[#fd8700] text-white uppercase"
        >
          Discover more
        </button>
      </div>
    </div>
  );
};
