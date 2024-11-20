import { Product } from "../model/product.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";
import fastify from "fastify";



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

const getAllProduct = async (request, reply) => {

  const cacheKey = 'allProducts'; 

  // const cachedProducts = fastify.cache.get(cacheKey);
  const cachedProducts = request.server.cache.get(cacheKey);

  if (cachedProducts) {
    return successResponse(cachedProducts,"Products feched successfully in Caching")
  }

  const allProducts = await Product.find();

  // Set the fetched data into the cache
  request.server.cache.set(cacheKey, allProducts);

  

  return successResponse(allProducts,"Products founded successfully")
};

export { homeScreeProduct, createProduct , getAllProduct };
