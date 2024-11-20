// routes/products.js

import { asyncHandler } from "../utils/AsynchHandler.js";
import {createProductRequestSchema} from "../schema/productRequestSchema.js"
import {homeScreeProduct,createProduct} from "../controller/productController.js"


async function productRoutes(fastify, options) {
    fastify.get('/all', asyncHandler(homeScreeProduct));
    // fastify.post('/users', asyncHandler(createUser));
    fastify.post('/create',{schema:createProductRequestSchema}, asyncHandler(createProduct));
    // fastify.post("test",{schema})
  }
  



export  { productRoutes }
  