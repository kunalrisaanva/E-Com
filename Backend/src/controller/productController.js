import { Product } from "../model/product.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";
import { upload } from "../middleware/multer.js";
import { uploadFile } from "../utils/firebase.js";
import { isValidObjectId } from "mongoose";

const homeScreeProduct = async (request, reply) => {
  // const { category } = request.query;
//  console.log(category);
//   if (category) {

//     const categoryProduct = await Product.find({ category: category });

//     return reply
//       .status(200)
//       .send(successResponse(categoryProduct, "products found by category successfully", 200));
//   }else if (category === 'all')

//   {
    const products = await Product.find();

    if (!products) errorResponse("product not found ", 404);
  
    return reply
      .status(200)
      .send(successResponse(products, "all products found successfully", 200));
  // }

  
};

const createProduct = async (request, reply) => {
  const {
    productName,
    productOf,
    productPreviousPrice,
    productCurrentPrice,
    category,
    availability,
  } = request.body;

  const file = request.file;

  if (!file) {
    return reply.status(400).send({ error: "Product image is required" });
  }

  const { path, destination } = file;

  const publicUrl = await uploadFile(path, destination);

  const createdProduct = await Product.create({
    productName,
    productImageUrl: publicUrl,
    productOf,
    productPreviousPrice,
    productCurrentPrice,
    category,
    availability,
  });

  if (!createdProduct) {
    return reply.status(400).send({ error: "Product creation failed" });
  }

  return reply.status(201).send({
    message: "Product created successfully",
    product: createdProduct,
  });
};

const getAllProduct = async (request, _) => {
  // const cacheKey = "allProducts";
  // const cachedProducts = request.server.cache.get(cacheKey);

  // if (cachedProducts) {
  //   return successResponse(
  //     cachedProducts,
  //     "Products feched successfully in Caching"
  //   );
  // }

  const allProducts = await Product.find().limit(6);

  if (allProducts.length === 0 || !allProducts) {
    errorResponse("Products not found", 404);
  }

  // Set the fetched data into the cache
  // request.server.cache.set(cacheKey, allProducts);

  return successResponse(allProducts, "Products founded successfully");
};

const updateProduct = async () => {
  const { _id } = req.params;

  if (!isValidObjectId(_id)) errorResponse("product id is not valid ", 400);

  const allowedUpdates = [
    "productName",
    "productOf",
    "productPreviousPrice",
    "productCurrentPrice",
    "category",
  ];

  const updates = Object.keys(request.body);

  // validation

  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) errorResponse("Invalid update", 400);
};

const getSingleProductDetails = async (req, reply) => {
  const { _id } = req.params;
  // console.log("product id successfully -----",_id);

  if (!_id) return errorResponse("please provide id", 404);

  if (!isValidObjectId(_id)) throw errorResponse("Id is not valid", 404);

  const product = await Product.findById(_id);

  if (!product) errorResponse("no product found with given Id", 401);

  return reply
    .status(200)
    .send(successResponse(product, "product found successfully", 200));
};

const delteProduct = async () => {};

export {
  homeScreeProduct,
  createProduct,
  getAllProduct,
  getSingleProductDetails,
};
