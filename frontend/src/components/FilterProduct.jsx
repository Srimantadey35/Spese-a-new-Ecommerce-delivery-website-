import React, { useState } from 'react'
import categoryList from '../utils/category.js';
import BiscuitImage from "../asset/Biscuit.jpg"
import colddrinks from "../asset/colddrinks.jpg"
import Snacks from "../asset/snacks.jpg"
import Cake from "../asset/Cakeand.jpg"
import { Link } from 'react-router-dom';


function FilterProduct({category,onClick}) {
    return(
      <div onClick={onClick} className='cursor-pointer hover:scale-105 transition-all ml-1 mr-1'>
         <div className='mt-8 w-18 md:w-28 h-18 md:h-28 shadow-md gap-1 rounded-sm md:gap-4 '>
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
                    className='w-full h-full  '
                   
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