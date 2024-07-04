import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CardProduct from '../components/CardProduct'
import { setCartItem } from '../../store/userSlice.js'
import axios from "axios"
import {loadStripe} from '@stripe/stripe-js';
import toast from 'react-hot-toast'

function Menu() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {productId} = useParams()
   const products = useSelector(state=>state.user.products)
   const displayProduct = products.filter(el => el._id === productId)[0]
   const handleAddToCart = (e)=>{
      e.preventDefault()
      e.stopPropagation()
      dispatch(setCartItem(
        displayProduct
      )) 
   }
   const handleBuy = ()=>{
      dispatch(setCartItem(
         displayProduct
       )) 
      navigate("/addtocart")
    }

  return (
    <div className='p-2  md:p-4'>
       <div className='w-full max-w-5xl m-auto flex'>
        <div className='max-w-sm  overflow-hidden w-full p-5'>
           <img src={displayProduct.image}
           className='  hover:scale-105 transition-all h-full'
           />
        </div>
        <div className='flex flex-col gap-1 px-2 mt-3'>
        <h3 className='text-black font-semibold capitalize text-2xl md:text-4xl'>{displayProduct.name}</h3>
        <p className='text-slate-400 font-medium text-2xl '>{displayProduct.category}</p>
       <p className='text-black font-bold md:text-2xl'>
        <span className='text-red-500'>₹</span>
        <span>{displayProduct.price}</span>
        </p>
          <div className='flex gap-3'>
             <button className='py-1 mt-2 rounded bg-orange-500 hover:bg-orange-600 min-w-[100px]' onClick={handleBuy}>Buy</button>
             <button className='py-1 mt-2 rounded bg-orange-500 hover:bg-orange-600 min-w-[100px]' onClick={handleAddToCart}>Add To Cart</button>
          </div>
           <div>
             <p className='font-medium text-slate-600'>Description:</p>
             <p className='text-medium'>{displayProduct.description}</p>
           </div>
        </div>

       </div>
       <p className='font-bold text-2xl'>Related Products:</p>
        <div className='flex flex-wrap gap-6 justify-center my-11'>
       {
         products.map((items)=>{
            return(
               <CardProduct items={items} key={items._id}/>
            )
         })
       }
       </div>
    </div>
  )
}

export default Menu