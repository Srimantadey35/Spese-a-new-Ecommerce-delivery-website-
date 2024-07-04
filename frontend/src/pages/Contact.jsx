import axios from 'axios'
import React, { useState } from 'react'
import toast from "react-hot-toast"
import {Link, useNavigate} from "react-router-dom"
function Contact() {
  const navigate = useNavigate()
  const [value,setValue] = useState({
    name : "",
    email : "",
    query : ""
  })
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setValue(prev=>{
    return{
       ...prev,
       [name] : value
    }
    })
   }
  const handleOnSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/contact`,value)
    if(response.data.success){
      toast.success("Thankyou for Contacting us !!")
      setTimeout(()=>{
        navigate("/")
      },1000)
      
    }
  }
  return (
    <div className="flex items-center mt-3 flex-col gap-3">
      <div>
      <p className='m-auto font-bold text-xl'>Contact Us</p>
      </div>
      <div className='w-full bg-slate-400 p-4 max-w-md mx-auto shadow-md rounded-md'>
        <form className='grid gap-3 py-4' onSubmit={handleOnSubmit}>
          <div className='grid gap-1' >
          <label htmlFor="name" className='font-bold text-md'>Name</label>
         <input type="text" placeholder='Enter your name' id='name' name='name' className='p-2' required onChange={handleOnChange}/>
         </div>
         <div className='grid gap-1'>
         <label htmlFor="email" className='font-bold text-md'>Email</label>
         <input type="email" id='email' name='email' placeholder='Enter your email' className='p-2' required onChange={handleOnChange}/>
         </div>
         <div className='grid gap-1'>
         <label htmlFor="query" className='font-bold text-md'>Query</label>
           <textarea name="query" id="query" placeholder='Describe your query' required onChange={handleOnChange}></textarea>
         </div>
          <button  className='w-full mt-3 p-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Contact