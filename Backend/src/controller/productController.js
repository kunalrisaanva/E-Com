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

const getAllProduct = async (request, _) => {
  const cacheKey = "allProducts";
  const cachedProducts = request.server.cache.get(cacheKey);

  if (cachedProducts) {
    return successResponse(
      cachedProducts,
      "Products feched successfully in Caching"
    );
  }

  const allProducts = await Product.find();

  if (allProducts.length === 0 || !allProducts) {
    errorResponse("Products not found", 404);
  }

  // Set the fetched data into the cache
  request.server.cache.set(cacheKey, allProducts);

  return successResponse(allProducts, "Products founded successfully");
};


const updateProduct = async () => {

}

const delteProduct = async () => {
  
}

export { homeScreeProduct, createProduct, getAllProduct };
