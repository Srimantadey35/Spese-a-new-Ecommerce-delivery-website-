import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import toast, {Toaster} from "react-hot-toast"
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts, setUser } from '../store/userSlice.js'
import Footer from './pages/Footer.jsx'

function App() {
  const accessToken = useSelector((state)=>state.user.accessToken)
  const dispatch = useDispatch()
  const fetchUserDetails = async ()=>{
    const response =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/user-details`)
    if(response.data.success){
      dispatch(setUser({name : response.data.data.data.name,email : response.data.data.data.email}))
      
    }

}

const fetchProductsDetails = async()=>{
    const response =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/products`)
    if(response.data.success){
      dispatch(setProducts(response.data.data.product))
      
    }
}

useEffect(()=>{
  fetchUserDetails()
},[accessToken])

useEffect(()=>{
  fetchProductsDetails()
},[])


  return (
    <>
    <main>
      <Toaster/>
      <Header/>
      <div className='pt-16'>
      <Outlet/>
      </div>
      <div className=''>
      <Footer/>
      </div>
     
     </main>
    </>
  )
}

export default App
