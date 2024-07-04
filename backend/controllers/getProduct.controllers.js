import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getProductDetails = asyncHandler( async(req,res)=>{
   const product = await Product.find().sort({createdAt : -1})
   if(!product){
    throw new ApiError(402,"Produts is not avalaible")
   }
   res
   .status(200)
   .json(
    new ApiResponse(200,{
       product: product
    })
   )
})

export {getProductDetails}