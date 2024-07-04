import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const checkoutPayment = asyncHandler(async(req,res)=>{
    const params = {
        submit_type : "pay",
        mode : 'payment',
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options : [{shipping_rate : "shr_1PX0ccRwHPyZUq5Vg6ZRTmUT"}],
        
        line_items: req.body.map((item)=>{
            return{
                price_data:{
                    currency : 'inr',
                    product_data:{
                        name: item.name,
                        // images:[item.image]
                    },
                    unit_amount : item.price * 100
                },
                adjustable_quantity:{
                    enabled: true,
                    minimum: 1
                },
                quantity: item.qty
            }
        }),
        success_url : `${process.env.CORS_ORIGIN}/success`,
        cancel_url : `${process.env.CORS_ORIGIN}/cancel`
    }

    const session = await stripe.checkout.sessions.create(params)
    if(!session){
        throw new ApiError(200,"session is not avalaible")
    }
    
    res.status(200).json(
        new ApiResponse(200,{session_id: session.id})
    )
})
export {checkoutPayment}