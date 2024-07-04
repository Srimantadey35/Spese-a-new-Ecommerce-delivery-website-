import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const accessToke = localStorage.getItem("accessToken")
const refreshToke = localStorage.getItem("refreshToken")

const initialState = {
    name : "",
    email : "",
    refreshToken : refreshToke,
    accessToken : accessToke,
    products : [],
    cartItem : []

}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state,action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
        },
        setToken :(state,action)=>{
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        setProducts :(state,action)=>{
            state.products = action.payload
            
        },
        setCartItem : (state,action)=>{
            const check = state.cartItem.some(el=>el._id === action.payload._id)
            if(check){
                toast("Already in Cart")
            }
            else{
            toast("Item Added Successfully")
            const total = action.payload.price
            state.cartItem = [...state.cartItem,{...action.payload,qty:1,total:total}]
            }
        },
        deleteCartItem: (state,action)=>{
         const index = state.cartItem.findIndex(el=>el._id === action.payload)
         state.cartItem.splice(index,1)
         toast("Item deleted successfully")
        },
        increaseQty:(state,action)=>{
            const index = state.cartItem.findIndex(el=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            state.cartItem[index].qty = ++ qty
            let price = state.cartItem[index].price
            state.cartItem[index].total = price + (state.cartItem[index].qty-1)*price
        },
        decreaseQty:(state,action)=>{
            const index = state.cartItem.findIndex(el=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            if(qty>1){
            state.cartItem[index].qty = --qty
            let price = state.cartItem[index].price
            let total = state.cartItem[index].total
            state.cartItem[index].total =  total - price 
            }
            

        }

    }
})

export  const {setUser,setToken,setProducts,setCartItem,deleteCartItem,increaseQty,decreaseQty} = userSlice.actions
export default userSlice.reducer