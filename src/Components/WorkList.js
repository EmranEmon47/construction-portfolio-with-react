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


  // carousel setting
  
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed:1500,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,

      //  for mobile version
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed:1500,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
       
      ]
    };
    const images=[work1, work2,work6, work3, work4, work5];


  return (
    <div className='lg:min-h-screen w-full bg-[#181818] lg:pt-20 py-8'>

      {/* heading */}
         <h5 className="uppercase text-lg lg:text-center text-[#fd8700] px-4">COMPLETE WORK LIST</h5>
        <h1 className="px-4 pb-8 text-5xl font-medium text-white uppercase lg:text-center lg:font-semibold lg:text-7xl">
        WE’VE COMPLETED INTERESTING <br /> PROJECTS
        </h1>

        {/* carousel */}
        <Slider {...settings} className="overflow-hidden">
        {
                images.map(m => (
                    <div className='py-8 lg:my-16'>
                    <img className=" w-[900px] lg:px-4 " src={m} alt="" />
                </div>
              ))

            }
           
          </Slider>


    </div>
  )
}
