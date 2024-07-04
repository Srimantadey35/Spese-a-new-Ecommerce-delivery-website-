import React from 'react'
import successPng from "../asset/check.png"

function Success() {
  return (
    <div className=' bg-green-300 w-full max-w-md m-auto flex justify-center items-center h-36 text-lg font-semibold'>
        <img src={successPng}  className='w-16 h-7 object-scale-down'/>
        <span>Payment is Successful</span>
    </div>
  )
}

export default Success