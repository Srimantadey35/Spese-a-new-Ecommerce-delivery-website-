import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateRefreshTokenAccessToken  = async (userId)=>{
   try {
     const user = await User.findById(userId)
     const accessToken = user.generateAccessToken()
     const refreshToken = user.generateRefreshToken()
     user.refreshToken = refreshToken
     user.save({validateBeforeSave : false})
     return {accessToken,refreshToken}
 
   } catch (error) {
    console.log("generating token failed ",error)
   }
}

const registerUser = asyncHandler(async (req,res)=>{
  

    const {name,email,password} = req.body

    
    if (
        [name, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or : [{ name },{ email }]
    })

    if(existedUser){
        throw new ApiError(400,"user is already registered")
    }

   const user =  await User.create({
        name : name,
        email : email,
        password
    })

    const reegisteredUser = await User.findById(user._id).select("-password -refreshToken ")

    if(!reegisteredUser){
        throw new ApiError(400,"registered user not found")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200,"user registered successfully")
    )

})

const login = asyncHandler(async (req,res)=>{
  const {email,password} = req.body
  if(!email && !password){
    throw new ApiError(402,"email or password is missing")
  }
  const user = await User.findOne({email})
  if(!user){
    throw new ApiError(402,"user not avalaible")
  }
  const isPasswordValid = await user.isPasswordCorrect(password)
  if(!isPasswordValid){
    throw new ApiError(401,"password is not correct")
  }
  const  {accessToken,refreshToken} = await generateRefreshTokenAccessToken(user._id)
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
  if(!loggedInUser){
    throw new ApiError(409,"user login failed")
  }

  const options = {
    httpOnly : true,
    secure : true,
    sameSite : 'None'
  }
  
  res.
  status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(
    new ApiResponse(200,
      {loggedInUser,accessToken,refreshToken},
      "user logged in successfully")
  )



})

const logOut = asyncHandler(async (req,res)=>{
  User.findByIdAndUpdate(
    req.user._id,
    {
      $unset:{
        refreshToken : 1
      }
    },{
      new : true
    }
  )
  const options = {
    httpOnly : true,
    secure : true,
    sameSite : 'None'
  }
  res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(
    new ApiResponse(200,'user loggedout successfully',
      {success : true},
    )
  )
})

export {registerUser,login,logOut}