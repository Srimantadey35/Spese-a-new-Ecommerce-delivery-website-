import React from 'react'
import cancelImg from "../asset/multiply.png"

function Cancel() {
  return (
    <div className=' bg-red-300 w-full max-w-md m-auto flex justify-center items-center h-36 text-lg font-semibold gap-1'>
    <img src={cancelImg} className='w-13 h-7'/>
    <span>Payment unsuccessful</span>
    </div>
  )
}

export default Cancel