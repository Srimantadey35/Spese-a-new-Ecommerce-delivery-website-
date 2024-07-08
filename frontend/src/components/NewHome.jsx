import React from 'react'
import deliveryBoyImage from "../asset/delivery-man.png"
import { Link } from 'react-router-dom'


function NewHome({products}) {
    return (
        <section className='container mx-auto w-full flex flex-col lg:flex-row lg:justify-between px-7 py-4 '>
            <div className='py-3 flex-1'>
               <div className='bg-green-300 flex items-center px-4 py-2 gap-2 rounded-full w-fit'>
                   <p className='text-green-700 font-bold'>Bike Delivery</p>
                   <div className='w-8 h-8 bg-white rounded-full'>
                        <img src={deliveryBoyImage}
                        className='w-full h-full rounded-full'
                         />
                   </div>
               </div>
               <div className='my-2 max-w-lg'>
                <h1 className='text-4xl lg:text-6xl font-bold max-w-lg'>
                  The Fastest Delivery  <span className='text-green-700'> In Your Area</span>
                </h1>
                <p className='my-3'>
                Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.
                </p>
                  <div >
                    <button className='bg-orange-600 font-bold text-white px-4 py-2 rounded hover:bg-orange-700 hover:scale-105 transition-all my-3'>Order Now</button>
                  </div>
               </div>
            </div>
    
            <div  className='w-full h-full flex items-center justify-center flex-1 lg:pl-4'>
               <div className='grid grid-cols-2 md:flex md:flex-wrap md:gap-5 lg:gap-12 mx-auto max-w-md text-center'>
               {
                products.slice(-4).map((items)=>{
                  return(
                    <Link to={"menu/"+items._id} key={items._id} className='w-fit mx-auto max-w-[200px] flex flex-col items-center justify-center'>
                       <div className='w-24'>
                         <img src={items.image}
                         className='w-full object-scale-down'
                         />
                       </div>
                       <p className='text-black font-medium text-sm'>{items.category}</p>
                       <p className='line-clamp-2 text-ellipsis font-semibold'>{items.name}</p>
                       <p className='text-black font-bold'>₹{items.price}</p>
                    </Link>
                  )
                })
               }
               </div>
            </div>
    
    
        </section>
        
      )
}

export default NewHome