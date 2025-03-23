import { Product } from "../model/product.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";
import { upload } from "../middleware/multer.js";
import { uploadFile } from "../utils/firebase.js";
import { isValidObjectId } from "mongoose";
import { cache } from "../app.js";

const homeScreeProduct = async (_, reply) => {
  const cacheKey = "allProducts",
    cachedProducts = cache.get(cacheKey);

  if (cachedProducts) {
    return reply
      .status(200)
      .send(successResponse(cachedProducts, "from cached data", 200));
  }

  const products = await Product.find();

  cache.set(cacheKey, products);

  if (!products) errorResponse("product not found ", 404);

  return reply
    .status(200)
    .send(
      successResponse(
        products,
        `all products ${await Product.countDocuments()} found successfully`,
        200
      )
    );
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
    qty,
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
    qty,
  });

  if (!createdProduct) {
    return reply.status(400).send({ error: "Product creation failed" });
  }

  return reply.status(201).send({
    message: "Product created successfully",
    product: createdProduct,
  });
};

const getAllProduct = async (request, rep) => {
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

  return rep
    .send(successResponse(allProducts, "Products founded successfully"))
    .status(200);
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

const productbyFilter = async (req, reply) => {
  const { q, sort, limit, skip } = req.query,limitConvertedNumber = Number(limit) || 8,skipConvertedNumber = Number(skip) || 1;

  // console.log("\n","catefory",q,"sort-",sort,"limit-",limit);

  const skipSystem = (skipConvertedNumber - 1) * limitConvertedNumber;

  const product = await Product.find({ category: q })
    .limit(limitConvertedNumber)
    .skip(skipSystem);

  if (!product) errorResponse("no product found with given Id", 401);

  return reply
    .status(200)
    .send(successResponse(product, "product found successfully", 200));
};

const relatedProduct = async (req, rep) => {
  const productId = req.params._id;

  if (!productId) return errorResponse("please prvide product id");

  // console.log("product id ---->",productId);zz

  const productType = await Product.findById({ _id: productId });

  if (!productType) return errorResponse("no product found with given Id", 404);

  const findSameCatePro = await Product.find({
    category: productType?.category,
  }).limit(4);

  return rep
    .status(200)
    .send(
      successResponse(
        findSameCatePro,
        "same category product found successfully"
      )
    );
};

const delteProduct = async () => {};

export {
  homeScreeProduct,
  createProduct,
  getAllProduct,
  getSingleProductDetails,
  productbyFilter,
  relatedProduct,
};
