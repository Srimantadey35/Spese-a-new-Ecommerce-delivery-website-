import React, { useRef } from 'react'
import CardProduct from './CardProduct.jsx'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function BestProducts({products}) { 
    
    const containerRef = useRef()

     const handleNext = ()=>{
       containerRef.current.scrollLeft += 300
     }
     const handlePrevious = ()=>{
        containerRef.current.scrollLeft -= 300
     }

  return (
    <div className='container mx-auto px-4 '>
        <h1 className='m-4 font-bold text-2xl'>Best Selling Products</h1>
         <div className='relative'>
         <div className='w-full z-10 flex items-center cursor-pointer overflow-x-scroll scrollbarNone relative  gap-5 transition-all scroll-smooth ' ref={containerRef}>
            {
                products.slice(-20).map((items)=>
                  <CardProduct items = {items} key = {items._id}/>
                )
            }
        </div>
          <div className='absolute top-0 right-0 left-0 bottom-0 hidden lg:flex items-center justify-between w-full'>
            <button onClick={handlePrevious} className='bg-white p-1 w-8 h-8 rounded-full shadow-md flex items-center justify-center text-lg z-10'><FaAngleLeft/></button>
            <button onClick={handleNext} className='bg-white p-1 w-8 h-8 rounded-full shadow-md flex items-center justify-center text-lg z-10'><FaAngleRight/></button>

          </div>
        
        
         </div>
    </div>
  )
}

export default BestProducts