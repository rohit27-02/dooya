/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='text-[#252525] font-bold'>
        <div className='fixed bottom-[3vw] right-[3vw] h-[4.5vw] cursor-pointer text-center w-[4.5vw] shadow-lg rounded-br-[3.5vw] hover:bg-[#252525] hover:rounded-tl-[3.5vw] text-[2.5vw] hover:rounded-br-none hover:text-[#fbfbfb] transition-all duration-700 bg-[#abd890]'>↑</div>
        <div style={{fontFamily: `'Montserrat',sans-serif`}} className='flex text-[1.25vw] bg-white justify-between mx-[8vw]'>
                <img className='h-[6.25vw] ml-[4vw]' src={"/logo.png"} alt="logo"></img>
            <div className='flex justify-evenly items-center w-3/4 '>
                <Link  href={"/"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>Home</span></Link>
                <Link  href={"/about"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>About Us</span></Link>
                <Link  href={"/"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>Products</span></Link>
                <Link  href={"/events"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>Events</span></Link>
                <Link  href={"/ecatalogue"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>E catalogue</span></Link>
                <Link  href={"/contact"}><span className='hover:text-[#abd890] cursor-pointer transition-colors duration-300'>Contact</span></Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar