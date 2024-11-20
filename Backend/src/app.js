import Fastify from "fastify";
import {productRoutes} from "./routes/product.routes.js";
import {registerRoutes} from "./routes/index.js"

const fastify = Fastify({
    logger:true
});


// Register routes
registerRoutes(fastify);

// Declare a route


fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
  })
// fastify.register(productRoutes, { prefix: '/api/v1' }); // Route registration


// export the server  fastify 

export { fastify }

