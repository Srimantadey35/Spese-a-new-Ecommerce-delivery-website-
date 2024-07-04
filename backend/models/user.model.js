import mongoose  from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true,
    trim : true,
    lowercase : true
  },
  email:{
    type : String,
    required : true,
    unique : true,
    trim : true

  },
  password:{
    type : String,
    required : true,
    trim : true
  },
  refreshToken:{
   type : String,
  }
},{
    timestamps : true
})

userSchema.pre("save",async function (next){
  if(!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password,10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password){
 return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken = function (){
  return jwt.sign(
    {
    _id : this._id,
    name : this.name,
    email : this.email,
    password : this.password
  },
  process.env.ACCESSTOKEN_SECRET,{
    expiresIn : process.env.ACCESSTOKEN_EXPIRY
  }
)
}
userSchema.methods.generateRefreshToken = function (){
  return jwt.sign(
    {
    _id : this._id,

  },
  process.env.REFRESHTOKEN_SECRET,{
    expiresIn : process.env.REFRESHTOKEN_EXPIRY
  }
)
}
export const User = mongoose.model("User",userSchema)