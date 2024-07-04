import React, { useState } from 'react'
import categoryList from '../utils/category.js';
import BiscuitImage from "../asset/Biscuit.jpg"
import colddrinks from "../asset/colddrinks.jpg"
import Snacks from "../asset/snacks.jpg"
import Cake from "../asset/cake.jpg"
import { Link } from 'react-router-dom';


function FilterProduct({category,onClick}) {
    return(
      <div onClick={onClick} className='cursor-pointer hover:scale-105 transition-all '>
         <div className='mt-8 w-28  h-28 shadow-md rounded-sm gap-4'>
                <div className='w-fit h-fit'>
                {
                  category.value === "Biscuit & Cookies" &&(
                    <img src={BiscuitImage}
                    className='w-full h-full  '
                    />  
                  )   
                }

                </div>
                <div className='w-fit h-fit'>
                {
                  category.value === "Cake & Muffins" &&(
                    <img src={Cake}
                    className='w-fit h-full '
                    />
                  )
                }
                </div>
                <div className='w-fit h-fit'>
                {
                  category.value === "Fruit Juices" &&(
                    <img src={colddrinks}
                    className='w-full h-full '
                    />
                  )
                }
                </div>
                <div className='w-fit h-fit'>
                {
                  category.value === "Snacks & Namkeen" &&(
                    <img src={Snacks}
                    className='w-full h-full'
                    />
                  )
                }
                </div>
                

              </div>
              <p className='text-center font-medium my-3'>{category.value}</p>
            </div>
              
                        
            
  )
}

export default FilterProduct