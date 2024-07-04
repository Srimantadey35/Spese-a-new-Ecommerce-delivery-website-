import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux"
import { setToken, setUser } from '../../store/userSlice'

function Login() {
    const dispatch = useDispatch()
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    
    const handleOnChange = (e)=>{
     const {name,value} = e.target
     setData((prev)=>{
     return{
        ...prev,
        [name] : value
     }
     })
    }

    const handelSubmit = async (e)=>{
     e.preventDefault()
     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`,data)
     if(response.data.success){
        toast.success(response.data.messege)
        dispatch(setToken({accessToken : response.data.data.accessToken,refreshToken: response.data.data.refreshToken}))
        dispatch(setUser({name : response.data.data.loggedInUser.name,email : response.data.data.loggedInUser.email}))
        localStorage.setItem("accessToken",response.data.data.accessToken)
        localStorage.setItem("refreshToken",response.data.data.refreshToken)
        navigate("/")
     }
     else{
        toast.error(response.data.data)
     }

    }
    
    
  return (
    <div className='mt-3'>
        <div className='w-full bg-white p-4 max-w-md mx-auto shadow-md rounded-md'>
            <p>Welcome To Spese</p>

            <form className='grid gap-3 py-4 ' onSubmit={handelSubmit}>
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
                <button className='w-full mt-3 p-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700'>Login</button>
            </form>

            <p>
                Don't have account ?  <Link to={"/register"} className='text-orange-600 font-semibold'>Register</Link>

            </p>

        </div>
    </div>
  )
}

export default Login