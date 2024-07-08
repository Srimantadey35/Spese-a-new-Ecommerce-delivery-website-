import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { setCartItem } from '../../store/userSlice'

function CardProduct({items}) {
   const dispatch = useDispatch()
   const handleAddToCart = (e)=>{
      e.preventDefault()
      e.stopPropagation()
      dispatch(setCartItem(
         {
            _id: items._id,
            name: items.name,
            price : items.price,
            category : items.category,
            image : items.image
         }
      ))
      
   }

  return (
   
   <Link to={"/menu/"+items._id} onClick={()=>window.scrollTo({top:"0",behavior:'smooth'})} className='md:w-44 w-27 h-25 md:min-w-52 shadow-md p-2 grid gap-1  md:max-w-52 mr-1 ml-1 text-center '>
      <div className='w-36 mx-auto '>
         <img 
         src={items?.image}
         alt={items?.name}
         className='object-scale-down w-full h-full'
         />
      </div>
      <p className='text-black font-medium text-sm'>{items?.category}</p>
      <p className='line-clamp-2 text-ellipsis font-semibold'>{items?.name}</p>
        <div className='flex items-center gap-2 md:gap-3 justify-between'>
            <p className='text-black font-bold'>₹{items?.price}</p>
            <button className='bg-orange-600 text-white px-2 py-1 rounded hover:bg-orange-700 mr-0.5' onClick={handleAddToCart}>Add To Cart</button>
        </div>
   </Link>
  )
}

export default CardProduct
