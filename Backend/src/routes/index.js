import { userRoutes } from "./user.routes.js";
import { productRoutes } from "./product.routes.js";

// import authRoutes from './auth.routes.js';

async function registerRoutes(fastify) {
  await fastify.register(userRoutes, { prefix: "/api/v1/user" });
  await fastify.register(productRoutes, { prefix: "/api/v1/products" });
}

export { registerRoutes };
