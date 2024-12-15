import Fastify from "fastify";
import cookiesParser from "cookie-parser";
import fastifyCors from "@fastify/cors";
import NodeCache from "node-cache";
import { productRoutes } from "./routes/product.routes.js";
import path from "node:path";
import fs from "node:fs/promises";

// import pump from "pump"
import { registerRoutes } from "./routes/index.js";
// import multer from "fastify-multer"
import fastifyMultipart from "@fastify/multipart";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyMultipart, {
  addToBody: true, // Add files to the request body
  // limits: { fileSize: 5 * 1024 * 1024 }, // Optional: Set file size limit (e.g., 5MB)
});

//cors implimentation

await fastify.register(fastifyCors, {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
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
