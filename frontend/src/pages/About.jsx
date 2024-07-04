import React, { useState } from 'react'
import Logo from "../asset/logo.png"
import { Link } from 'react-router-dom'

function About() {
 
  return (
    <div>
       <div className='m-5 font-bold text-xl'>
         <p >About Us</p>
       </div>
       <div className=' flex justify-between m-5 '>
         <div  className=' max-w-md'>
            <p  className='bg-slate-500 p-3 text-white font-semibold text-lg cursor-pointer '>What is Spese?</p>
            <div className='border border-slate-400 mt-2'>
              
               <h3 className='text-md mt-2 p-3'>Spese is India’s largest online food and grocery store. With over 1,000 products and over a 10 brands in our catalogue you will find everything you are looking for. Right from Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products  – we have it all.
               Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep. You can pay online using your debit / credit card or by cash / sodexo on delivery.
               We guarantee on time delivery, and the best quality!</h3>
            </div>
         </div>
         <div className='max-w-md'>
           <p className='bg-slate-500 p-3 text-white font-semibold text-lg cursor-pointer '>Why should I shop at Spese?</p>
           <div className='border border-slate-400 mt-2'>
           <h3 className='text-md mt-2 p-3'>
           Spese allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking , standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at Spese.com, India’s best online grocery store!
           </h3>
           </div>
         </div>
          <div className=' max-w-md'>
            <p className='bg-slate-500 p-3 text-white font-semibold text-lg cursor-pointer'>How to Order?</p>
            <div className='flex flex-col items-center justify-center gap-3 text-md mt-2 border border-slate-400 p-3'>
              <p><span className='text-red-600 font-bold'>01.</span>Browse spese.com for products</p>
              <p><span className='font-bold text-red-600'>02.</span>Add item to your Shopping Basket</p>
              <p><span className='font-bold text-red-600'>03.</span>Select suitable payment option(Cash, Sodexo, Credit Card)</p>
              <p><span className='font-bold text-red-600'>04.</span>Your products will be home-delivered as per your order</p>
            </div>
          </div>
        </div>
        
    </div>
    
  )
}

export default About