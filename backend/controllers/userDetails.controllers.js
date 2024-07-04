import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const userDetails = asyncHandler(async(req,res)=>{
 res.status(200).json(
  new ApiResponse(200,
    {data : req.user}
  )
)
})

export {userDetails}