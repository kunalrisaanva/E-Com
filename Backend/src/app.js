import Fastify from "fastify";
import cookiesParser from "cookie-parser";
import fastifyCors from "@fastify/cors"
import NodeCache from "node-cache";
import { productRoutes } from "./routes/product.routes.js";
import { registerRoutes } from "./routes/index.js";

const fastify = Fastify({
  logger: true,
});

//cors implimentation 

await fastify.register(fastifyCors, {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
});


// Add cache instance to Fastify
const cache = new NodeCache({ stdTTL: 3600 });

// cookies

// fastify.register(cookiesParser());

// Middleware or plugin to expose cache globally if needed
fastify.decorate("cache", cache);

// Register routes
registerRoutes(fastify);

// Declare a route

fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});
// fastify.register(productRoutes, { prefix: '/api/v1' }); // Route registration

// export the server  fastify

export { fastify };
