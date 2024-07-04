import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    query:{
        type : String,
        required : true
    },
},{timestamps:true})

export const ContactModel = mongoose.model("ContactModel",contactSchema)