import React from 'react'
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem, increaseQty,decreaseQty } from '../../store/userSlice.js';

function CartItems({id,name,image,category,qty,total,price}) {
    const dispatch = useDispatch()

  return (
    <div className='bg-slate-300 p-2 flex gap-3 rounded border border-slate-400'>
        <div className='p-3 bg-white overflow-hidden rounded'>
            <img src={image} className='h-30 w-32 object-cover' />
        </div>
        <div className='flex flex-col gap-1 px-2 mt-3 w-full'>
        <div className='flex justify-between'>
        <h3 className='text-black font-semibold capitalize text-lg md:text-xl'>{name}</h3>
         <div className='cursor-pointer font-bold text-slate-600 hover:text-red-500'>
         <MdOutlineDelete size={25} onClick={()=>{dispatch(deleteCartItem(id))}}/>
         </div>
         </div>
        <p className='text-slate-400 font-medium text-xl '>{category}</p>
       <p className='text-black font-bold md:text-lg'>
        <span className='text-red-500'>₹</span>
        <span>{price}</span>
        </p>
        <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
             <button className='py-1 mt-2 rounded bg-slate-400 hover:bg-slate-500 p-2 '  onClick={()=>{dispatch(increaseQty(id))}} ><LuPlus/></button>
             <p className='font-semibold p-1'>{qty}</p>
             <button className='py-1 mt-2 rounded bg-slate-400 hover:bg-slate-500 p-2 ' onClick={()=>{dispatch(decreaseQty(id))}}><FiMinus/></button>
          </div>
           <div className='flex items-center gap-2 font-bold text-slate-700'>
             <p>Total:</p>
             <p><span className='text-red-500'>₹</span>{total}</p>
           </div>
          </div>
        </div>

    </div>
  )
}

export default CartItems