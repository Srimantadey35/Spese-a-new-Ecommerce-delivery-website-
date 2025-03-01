import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json({limit : "10666kb"}))
app.use(cookieParser())
app.use(express.urlencoded({extended : true}))



app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.get("/",(req,res)=>{
    res.json({
        messege : "server running on port" + process.env.PORT,
        success : true
    })
})

//importing router
import userRouter from "./routes/user.route.js"

app.use("/api/v1/user",userRouter)

export {app}





