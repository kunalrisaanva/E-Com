// routes/products.js

import { asyncHandler } from "../utils/AsynchHandler.js";
import {homeScreeProduct} from "../controller/productController.js"


async function productRoutes(fastify, options) {
    fastify.get('/all', asyncHandler(homeScreeProduct));
    // fastify.post('/users', asyncHandler(createUser));
  }
  



export  { productRoutes }
  