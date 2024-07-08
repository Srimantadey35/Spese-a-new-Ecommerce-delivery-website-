import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

function Register() {
    const navigate = useNavigate()
    const [data,setData] = useState({
        email : "",
        password : "",
        username : ""
    })
    const handleOnChange = (e)=>{
     const {name,value} = e.target
     setData(prev=>{
     return{
        ...prev,
        [name] : value
     }
     })
    }

    const handelSubmit = async (e)=>{
     e.preventDefault()
     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/register`,data)
     if(response.data.success){
        toast.success(response.data.data)
        navigate("/login")
     }
     else{
        toast.error(response.data.data)
     }     
    }
  return (
    <div className='m-3'>
        <div className='w-full bg-white p-4 max-w-md mx-auto shadow-md rounded-md'>
            <p>Welcome To Spese</p>

            <form className='grid gap-3 py-4 ' onSubmit={handelSubmit}>
            <div className='grid gap-1'>
                <label htmlFor='name'>Name</label>
                <input 
                type="text"
                id='name' name='name'
                placeholder='enter your name'
                className='bg-slate-300 p-1 px-2 rounded'
                onChange={handleOnChange}
                required
                />
                </div>

                <div className='grid gap-1'>
                <label htmlFor='email'>Email</label>
                <input 
                type="email"
                id='email' name='email'
                placeholder='enter your email'
                className='bg-slate-300 p-1 px-2 rounded'
                onChange={handleOnChange}
                required
                />
                </div>

                <div className='grid gap-1'>
                <label htmlFor='password'>Password</label>
                <input 
                type="password"
                id='email' name='password'
                placeholder='enter your password'
                className='bg-slate-300 p-1 px-2 rounded'
                onChange={handleOnChange}
                required
                />
                </div>
                <button className='w-full mt-3 p-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700'>Register</button>
            </form>

            <p>
                Already have account ?  <Link to={"/login"} className='text-orange-600 font-semibold'>Login</Link>

            </p>

        </div>
    </div>
  )
}

export default Register