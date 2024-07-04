import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import categoryList from '../utils/category.js'
import { IoClose } from "react-icons/io5"
import axios from 'axios'
import toast from 'react-hot-toast'

function ProductDetails() {
  const user = useSelector((state)=>state.user)
  const [permission,setPermission] = useState(false)
  const [product,setProduct] = useState({
    name : "",
    description : "",
    price: "",
    category : "",
    image : ""
  })
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setProduct((prev)=>{
      return {
      ...prev,
      [name] : value
   } 
  }
  )
 }
 const handleImage = async(e)=>{
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  const image64 = await new Promise((resolve,reject)=>{
    reader.onload = ()=>resolve(reader.result) 
    reader.onerror = (error)=>reject(error)
  })
  setProduct((prev)=>{
    return{
    ...prev,
     image: image64,
     name: file?.name?.split("-").join(" ").replace(".jpg","")
    }
  }
  )
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/upload-product`,product)
  if(response.data.success){
    toast.success(response.data.data)
    setProduct({
      name : "",
    description : "",
    price: "",
    category : "",
    image : ""
  })
    return
  }
  toast.error(response.data.messege)

 }

 const deleteImage = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  setProduct((prev)=>{
    return{
    ...prev,
     image: ""
    }
  }
)
  
 }
  useEffect(()=>{
    if(import.meta.env.VITE_ADMIN_EMAIL === user.email){
      setPermission(true)
    }
    else{
      setPermission(false)
    }
  },[user])
 
  return (
    <div>
      {
        !permission && (
          <div className='bg-green-100 px-6 py-4 w-fit mx-auto'>
              <p className='text-red-700 font-semibold '>Don't have access</p>
          </div>
        )
      }
      {
        permission && (
          <div className='w-full h-full'>
            <div className='w-full max-w-lg p-4 mx-auto mt-3 rounded shadow-md bg-gray-400'>
                <div className='font-semibold'>
                  Upload Product
                 </div>       
                    <form className='my-4 grid gap-2' onSubmit={handleSubmit}>

                       <div className='grid gap-1'>
                        <label htmlFor="productName">Name:</label>
                        <input
                         id='productName'
                         type="text" 
                         name='name'
                         placeholder='Enter product name'
                         className='bg-slate-100 p-1'
                         value={product.name}
                         onChange={handleOnChange}
                         required
                         />
                       </div>

                       <div className='grid gap-1'>
                        <label htmlFor="category">Category:</label>
                        <select
                         name='category'
                         className='bg-slate-100 p-1'
                         value={product.category}
                         onChange={handleOnChange}
                         >
                           <option value="">Select Category</option>
                           {
                            categoryList.map((category)=>
                              
                                <option key = {category.value} value = {category.value}>{category.label}</option>  
                            )
                           }
                        </select>  
                       </div>

                       <div className='grid gap-1'>
                       <label htmlFor="image">Image:
                          <div className='w-full h-40 bg-slate-100 border-slate-200 rounded mt-2 flex justify-center items-center cursor-pointer'>
                             {
                               product.image ? (
                                  <div className='w-full h-full relative'>
                                      <button className='absolute z-10 right-0 hover:text-red-600' onClick={deleteImage}>
                                       <IoClose size={28}/>
                                       </button>
                                     
                                     <img src={product.image}
                                         className='w-full h-full object-scale-down mix-blend-multiply'
                                     />

                                  </div>
                                  
                               ):
                               (
                                <div>
                               <p>Upload Image</p>
                                <input type="file" id='image' onChange={handleImage} className='hidden' />
                             </div>
                               )
                             }   
                          </div>
                       </label>
                       </div>

                       <div className='grid gap-1'>
                        <label htmlFor="price">Price:</label>
                        <input
                         id='price'
                         type="number" 
                         name='price'
                         placeholder='Enter product price'
                         className='bg-slate-100 p-1'
                         value={product.price}
                         onChange={handleOnChange}
                         />
                       </div>

                       <div className='grid gap-1'>
                        <label htmlFor="description">Description:</label>
                        <textarea
                         id='description'
                         type="text" 
                         name='description'
                         placeholder='Enter product description'
                         className='bg-slate-100 p-1'
                         rows={3}
                         value={product.description}
                         onChange={handleOnChange}
                         required
                         />
                       </div>
                          
                          <button className='bg-orange-600 text-white font-semibold hover:bg-orange-700 px-4 py-2 mt-2 rounded'>Upload Product</button>

                    </form>    
            </div>

          </div>
        )
      }
      
    </div>
  )
}

export default ProductDetails