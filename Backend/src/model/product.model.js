import mongoose from "mongoose";

const productShcema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "product name is required"],
    trim: true,
  },

  productImageUrl: {
    type: String,
    required: [true, "product image url is required"],
  },

  productOf: {
    type: String,
    // required:[true,"produc"]
  },

  productPreviousPrice: {
    type: String,
  },

  productCurrentPrice: {
    type: String,
    required: [true, "product Current Price is required"],
  },

  category: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productShcema);
