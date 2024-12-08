import { asyncHandler } from "../utils/AsynchHandler.js";
import { createProductRequestSchema } from "../schema/productRequestSchema.js";
import {
  createProduct,
  homeScreeProduct,
  getAllProduct,
} from "../controller/productController.js";
import { upload } from "../middleware/multer.js";


async function productRoutes(fastify, options) {
  // Home screen route
  fastify.get("/home-screen", asyncHandler(homeScreeProduct));

  // Create product route with file handling
  fastify.post(
    "/create",
    {
      schema: createProductRequestSchema, // Optional schema validation for other fields
      preValidation: upload.single("productImageUrl"),
    },
    asyncHandler(createProduct)
  );

  // Get all products route
  fastify.get("/all", asyncHandler(getAllProduct));
}

export { productRoutes };
