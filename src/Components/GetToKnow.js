import React from "react";
import getKnowImage from "../Assets/Images/get-to-know.jpg";

export const GetToKnow = () => {
  return (
    <div className="min-h-screen flex justify-between items-center px-36 gap-4">
      <div className="basis-1/2">
        <img src={getKnowImage} className="w-[700px]" alt="get-to-know" />
      </div>
      <div className="basis-1/2">
        <small className="uppercase text-lg">Get to know us</small>
        <h1 className="text-7xl text-black font-semibold uppercase">
          WE’RE BUILDING THE GREATEST FUTURE NOW
        </h1>
        <p className="text-lg py-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          eveniet explicabo! Saepe, provident? Placeat, temporibus! Eos aliquam
          similique rem harum consectetur odio deserunt earum nisi voluptatibus,
          asperiores nobis incidunt consequuntur reiciendis veritatis adipisci
          rerum animi perspiciatis saepe soluta exercitationem facilis maiores,
          numquam temporibus dolorum? Cupiditate deleniti sed non illum facilis?
        </p>
        <button
          className="text-xl font-semibold    px-8 py-4  bg-[#fd8700] text-white uppercase"
        >
          Discover more
        </button>
      </div>
    </div>
  );
};
