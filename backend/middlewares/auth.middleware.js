import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"

const verifyJwt =  asyncHandler(async (req,_,next)=>{
  try {
    const token = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer ","")
    if(!token){
      throw new ApiError(401,"token not found")
    }
    const decodedToken = jwt.verify(token,process.env.ACCESSTOKEN_SECRET)
    if(!decodedToken){
      throw new ApiError(400,"jwt verification unsuccessful")
    }
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    if(!user){
      throw new ApiError(401,"user not found")
    }
  
    req.user = user
    next()
  } catch (error) {
    console.log("error",error)
  }
})

export {verifyJwt}