import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NewHome from '../components/NewHome.jsx'
import BestProducts from '../components/BestProducts.jsx'
import FilterProduct from '../components/FilterProduct.jsx'
import categoryList from '../utils/category.js'
import CardProduct from '../components/CardProduct.jsx'
import { Link } from 'react-router-dom'

function Home() {
  const products = useSelector(state => state.user.products)
  const [datafilter,setDataFilter] = useState([])
  useEffect(()=>{
    if(products)
    setDataFilter(products)
  },[products])
  const handleFilterProduct = (category)=>{
    const filter = products.filter(pro=>pro.category.toLowerCase() === category.label.toLowerCase())
    setDataFilter(()=>{
      return[
        ...filter
      ]
    })

  }

  return(
    <div>
       <NewHome products = {products}/>
       <BestProducts products = {products}/>

       <div>
       <div className='flex gap-4 justify-center scrollbar-none'>
        {
          categoryList[0] && categoryList.map((items,index)=>{
            return(
              <div key={index + "filtersection"}>
                 <FilterProduct  category = {items} onClick = {()=>handleFilterProduct(items)} />
              </div>
            )
          })
        } 
       </div>
         <div className='flex flex-wrap justify-center gap-8 py-9'>
          {
            datafilter?.map((items)=>{
              
              return(
                <CardProduct 
                
                items={items}
                key={items._id}
                />
              )
              
            })
          }
            
         </div>
         </div>
       
       
    </div>
  )
  
}

export default Home