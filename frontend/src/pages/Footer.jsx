import React from 'react'
import Logo from "../asset/logo.png"
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className=' pt-20 mt-14 bottom-0 w-full relative'>
    <div className=' bottom-0 flex justify-between   bg-white p-4 mt-16 shadow  border-slate-300 border-t-2 items-center'>
    <div className=''> 
       <Link to={"/"}>
        <img src={Logo} width={69} className=''  />
        </Link>
        <div className='flex gap-5 max-w-sm mt-2'>
        <NavLink to={'https://www.instagram.com/nomadic_srimanta/'} target='blank'>
          <LuInstagram size={26}/>
        </NavLink>
        <div>
          <FaTwitter size={26}/>
        </div>
        <Link to={'https://www.facebook.com/srimanta.dey.7967'} target='blank' >
          <FaFacebookF size={26}/>
        </Link>
        <Link to={'https://www.linkedin.com/in/srimanta-dey35/'} target='blank'>
          <FaLinkedinIn size={26}/>
        </Link>
        </div>
    </div>
    <div className='font-semibold text-lg'>
        <Link to={"/"}><p>Home</p></Link>
        <p>Delivery Areas</p>
        <p>Careers</p>
        <Link to={"/contact"}> <p>Customer Support</p></Link>
       
    </div>
    <div className='font-semibold text-lg'>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p></p>
    </div>
    </div>
    </div>
  )
}

export default Footer