/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <div style={{fontFamily: `'Montserrat',sans-serif`}} className='flex text-[1.25vw] bg-white justify-between mx-[8vw]'>
                <img className='h-[6.25vw] ml-[4vw]' src={"/logo.png"} alt="logo"></img>
            <div className='flex justify-evenly items-center w-2/4 '>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/"}>Products</Link>
                <Link href={"/events"}>Events</Link>
                <Link href={"/ecatalogue"}>E catalogue</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar