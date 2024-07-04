import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const uploadProductDetails = asyncHandler(async(req,res)=>{
    const {name,description,price,category,image} = req.body

    if (
        [name,description , price,category,image].some((field) => field === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    
    
    if(process.env.ADMIN_EMAIL !== req.user.email){
        
        throw new ApiError(400,"permission denied")
    }

    await Product.create({
        name,
        description,
        price,
        category,
        image
    })

    res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "product uploaded successfully",
            
        )
    )

})

export {uploadProductDetails}