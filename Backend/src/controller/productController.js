import { Product } from "../model/product.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";

const homeScreeProduct = async (request, reply) => {
  return { message: "Product created successfully" };
};

const createProduct = async (request, reply) => {
  const {
    productName,
    productImageUrl,
    productOf,
    productPreviousPrice,
    productCurrentPrice,
    category,
  } = request.body;
  // console.log(productName);

  const createdProduct = await Product.create({
    productName,
    productImageUrl,
    productOf,
    productPreviousPrice,
    productCurrentPrice,
    category,
  });

  return reply
    .status(201)
    .send(successResponse(createdProduct, "product created successfully"));
};

export { homeScreeProduct, createProduct };
