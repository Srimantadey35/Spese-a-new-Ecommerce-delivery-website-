import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDb (){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Mongodb connected:",connectionInstance.connection.host)
        
    } catch (error) {
        console.log("mongodb connection failed",error)
    }
}

export default connectDb