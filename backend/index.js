
import { app } from "./app.js"
import connectDb from "./config/dbConnect.js"
import dotenv from "dotenv"
dotenv.config({
    path : "./.env"
})

connectDb()
.then(()=>{

    app.get("/user",(req,res)=>{
     res.send("hello how are you")
    })
    app.listen(process.env.PORT,()=>{
        console.log("server running on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log("database connection failed",error)
}
)