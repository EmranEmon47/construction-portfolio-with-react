import React from 'react'
import logo from '../Assets/Images/logo-a.png'

export const Nav = () => {
  return (
    <div className='flex justify-center items-center bg-[#181818] py-3  w-full '>
        {/* company logo */}
        <img src={logo} className="w-[180px]" alt="company-logo" />
    </div>
  )
}
