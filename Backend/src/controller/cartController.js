import { Cart } from "../model/cart.model.js";
import { Product } from "../model/product.model.js";
import { errorResponse } from "../utils/Error.js";
import { successResponse } from "../utils/Response.js";

const addToCartProduct = async(req,_) => {

    // to do 
    // add to cart product make schema and 

    const { _id } = req.params;

    // quantity will less when add to cart prodcuct 


    const product = await Product.findById(_id);


    if(!product) return errorResponse("product not found",404);


    return successResponse(product,"product found successfully");



}


const deleteToCartProduct = async(req,_) => {

    // to do 
    // dlete  product cart form to the  cart   

    const { id } = req.body;


    const deleteProduct = await Product.findByIdAndDelete(id);


    
    if(!deleteProduct) errorResponse("product not found",404);


    return successResponse(null," produt has been deleted ");



}

const ClearAllProduct = async(req,_) => {

    // to do 
    // delete all products into the cart 


    const deleteAllProduct = await Cart.deleteMany();


    return successResponse(null,"cleared cart")
    



}


export { addToCartProduct , deleteToCartProduct, ClearAllProduct }