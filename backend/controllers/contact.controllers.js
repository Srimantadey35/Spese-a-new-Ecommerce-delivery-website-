import { ContactModel } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const contactDetails = asyncHandler(async(req,res)=>{
   const {name,email,query} = req.body
   if([name,email,query].some((field)=>field?.trim() === "")){
      throw new ApiError(400,"fields are not avalaible")
   }
   const contact = await ContactModel.create({
    name ,
    email,
    query
   })
   const response = await ContactModel.findById(contact._id)
   res.status(200).json(
    new ApiResponse(200,
        {response},
        "contact details added successfully")
   )
})

export {contactDetails}