import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { Link , NavLink, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setToken, setUser } from '../../store/userSlice.js'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const token = localStorage.getItem("accessToken")
  const {productId} = useParams()
  const user = useSelector((state)=>state.user)
  const [openmenu,setOpenmenu] = useState(false)
  const dispatch = useDispatch()
   const handleLogout = async()=>{
     try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logout`)
      if(response.data.success){
      toast.success(response.data.data)
      localStorage.clear()
      dispatch(setUser({name: "",email : ""}))
      dispatch(setToken({accessToken : "",refreshToken: ""}))
      setOpenmenu(false)
      }
     } catch (error) {
      console.log(error)
      
     }
     
   } 
   const cartItemNumber = useSelector(state=>state.user.cartItem)
  return (
    <header className='fixed h-16  px-2 w-full shadow-md bg-white md:px-4 flex items-center justify-between  z-30'>
      <div>
      <Link to={"/"} >
        <img src={logo} 
        width={50}
          />
      </Link>
      </div>
      {
        user.name && (<div className='flex items-center gap-1 text-green-700 mr-auto md:ml-auto'>
          <span className='pl-28'><MdOutlineVerified/></span>
          <p className='capitalize max-w-[80px] text-ellipsis line-clamp-1 lg:max-w-[200px] font-semibold'>{user.name}</p>
        </div>)
      }
      
      <div className='flex items-center md:gap-6 gap-4'>
        <div className='hidden md:flex gap-6 items-center text-lg'>
          <NavLink to={"/"} className={({isActive})=>`${isActive ? "font-semibold text-blue-700":"font-normal text-black"}`}>
           Home
          </NavLink>

          <NavLink to={`menu/6676afe2b4be942a4478d05f`} className={({isActive})=>`${isActive ? "font-semibold text-blue-700":"font-normal text-black"}`}>
           Menu
          </NavLink>

          <NavLink to={"/about"} className={({isActive})=>`${isActive ? "font-semibold text-blue-700":"font-normal text-black"}`}>
           About
          </NavLink>

          <NavLink to={"/contact"} className={({isActive})=>`${isActive ? "font-semibold text-blue-700":"font-normal text-black"}`}>
           Contact
          </NavLink>
          
        </div>
        <NavLink to={"/addtocart"} className={({isActive})=>`${isActive ? "font-semibold text-lg text-blue-700":"font-normal text-black"} relative`}>
            <IoCartOutline/>
            <div className='absolute -top-3.5 -right-2 text-white bg-red-500 h-5 w-5 rounded-full m-0 p-0 text-sm text-center'>
                {cartItemNumber.length}
             </div>
          </NavLink>
        {token || user.email ? (
        <div className='relative'>
          <div onClick={()=>setOpenmenu((prev)=>!prev)} className='cursor-pointer'>
            <FaRegUserCircle size={28}/>
          </div>
          {openmenu && <div className='absolute top-12  bg-white right-0 shadow-md  rounded'>
              {
                  import.meta.env.VITE_ADMIN_EMAIL === user.email && (
                  <NavLink to={"/upload-product"} className={({isActive})=>`${isActive ? "font-semibold text-blue-700":"font-normal text-black"} hover:text-blue-600 rounded p-2 mt-2`}>
                  upload-Product
                  </NavLink>
                )
              }
              
             <button to={"/logout"} onClick={handleLogout} className='bg-orange-600 border border-orange-600 text-white px-3 py-1 rounded font-semibold text-sm lg:text-base  hover:bg-blue-600 mt-2 '>
                Logout
             </button>
          </div> }
          
        </div>
      )
      :(
      <Link to={"/login"} className='bg-orange-600 border border-orange-600 text-white px-3 py-1 rounded font-semibold hover:bg-orange-700'>
        Login
        </Link>
      )}
    </div>

    </header>
    
  )
}

export default Header
