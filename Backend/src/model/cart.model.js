import mongoose, { model } from "mongoose";

const cartSchema = new mongoose.Schema({
        
    productName:{
        type:String
    },
})


const Cart = model("Cart",cartSchema)