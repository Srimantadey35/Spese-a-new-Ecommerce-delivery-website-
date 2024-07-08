import React from 'react'
import Logo from "../asset/logo.png"
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='absolute right-0 left-0 bottom-15 mt-16 pt-16 min-h-[130px]  bg-white '>
    <div className=' w-full py-38'>
    <div className='  flex md:justify-between flex-col md:flex-row md:items-center  gap-3 p-4 pb-10 '>
     <div className='flex flex-col  '> 
       <Link to={"/"} >
        <img src={Logo} width={69} className=''  />
        </Link>
        <div className='flex gap-5 max-w-sm mt-2 '>
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
    
     <div className='font-semibold text-lg flex flex-col  '>
        <Link to={"/"}><p>Home</p></Link>
        <p>Delivery Areas</p>
        <p>Careers</p>
        <Link to={"/contact"}><p>Customer Support</p></Link>
       
     </div>
     <div className='font-semibold text-lg flex flex-col '>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p></p>
     </div>
     <div>
       <h2 className='text-2xl font-bold mb-3'>Spese</h2>
       <p>© copy right 2024 by Spese.com</p>
     </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer