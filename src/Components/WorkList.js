import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from '../Assets/Images/20210129_103451.jpg';
import work2 from '../Assets/Images/20210129_103453.jpg';
import work3 from '../Assets/Images/20210129_103458.jpg';

import work4 from '../Assets/Images/20210129_103521.jpg';
import work5 from '../Assets/Images/20210129_103635.jpg';
import work6 from '../Assets/Images/20210129_103652.jpg';


export const WorkList = () => {
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed:1300,
      cssEase: 'linear',
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const images=[work1, work2,work6, work3, work4, work5];


  return (
    <div className='min-h-screen w-full bg-[#181818] pt-20'>
         <h5 className="uppercase text-lg text-center text-white ">COMPLETE WORK LIST</h5>
        <h1 className="text-7xl text-white font-semibold uppercase text-center">
        WE’VE COMPLETED INTERESTING <br /> PROJECTS
        </h1>
        <Slider {...settings} className="overflow-hidden">
        {
                images.map(m => (
                    <div className='my-16'>
                    <img className=" w-[900px] px-4 " src={m} alt="" />
                </div>
              ))

            }
           
          </Slider>


    </div>
  )
}