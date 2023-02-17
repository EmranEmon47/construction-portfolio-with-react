import React from 'react';
import companyLogo from '../Assets/Images/logo-a.png';


export const Footer = () => {
  return (
    <div className='bg-[#181818] w-full h-[300px] flex flex-col justify-center items-center'>
        <img src={companyLogo} className="w-[180px]" alt="logo" />
        <p className='text-white font-lg text-xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
        <p className='text-[#fd8700] font-lg text-3xl '>Contact Us For a Query: <a href="tel:+01XXXXXXXX"></a>+01XXXXXXXX</p>
        <p className='text-white pt-12'>© Copyright 2023 KJM</p>
    </div>
  )
}
