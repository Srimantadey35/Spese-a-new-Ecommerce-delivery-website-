import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../components/CartItems'
import emptycartImage from "../asset/empty.png"
import axios from "axios"
import {loadStripe} from '@stripe/stripe-js';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddToCart() {
    const user = useSelector(state=>state.user)
    const navigate = useNavigate()
    const cartItem = useSelector(state=>state.user.cartItem)
    const totalPrice = cartItem.reduce((acc,curr)=>
      acc + parseInt(curr.total),0
    )
    const totalQty = cartItem.reduce((acc,curr)=>
      acc + parseInt(curr.qty),0
    )

    const handlePayment = async()=>{
      if(user.email){
      const stripePromise = await loadStripe(`${import.meta.env.VITE_PUBLIC_KEY}`)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/checkout-payment`,cartItem)
     // if(!response.data.data.success)return;

      toast("Redirect to paymentgateway !!")
      stripePromise.redirectToCheckout({sessionId: response.data.data.session_id})
      }
      else{
        toast("Please Login !!")
        setTimeout(()=>{
          navigate("/login")
        },1000)
      }
      
    }
  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
      {cartItem[0] ?
      <div className=''>
        {/* display cart items */}
        <div className='my-4 flex'>
           <div className='w-full max-w-3xl'>
            {
              cartItem.map((el)=>{
                return(
                   <CartItems 
                    key={el._id}
                    id={el._id}
                    name = {el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                   />
                )
              })
            }
           </div>
           {/* total cart item */}
           <div className='w-full max-w-md ml-auto'> 
             <h2 className='bg-orange-600 text-white p-2 text-lg'>Summary</h2>
             <div className='flex w-full py-2 text-lg border border-slate-300'>
               <p className='pl-3'>Total Quantity:</p>
               <p className='ml-auto w-32 font-bold'>{totalQty}</p>
             </div>
             <div className='flex w-full py-2 text-lg border border-slate-300'>
               <p className='pl-3'>Total Price:</p>
               <p className='ml-auto w-32 font-bold'><span className='text-red-500'>₹</span>{totalPrice}</p>
             </div>
             <button className='bg-yellow-500 w-full text-lg text-white font-bold p-2 hover:bg-yellow-600' onClick={handlePayment}>Place Order</button>

           </div>

        </div>
      </div>
      :
      <>
          <div className='flex items-center justify-center w-full flex-col'>
            <img src={emptycartImage} className='w-full max-w-md mix-blend-multiply'/>
             <p className='font-bold text-xl text-slate-600'>Cart is Empty</p>
          </div>      
      </>
    }
      
    </div>
  )
}

export default AddToCart