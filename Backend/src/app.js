import Fastify from "fastify";

const fastify = Fastify({
    logger:true
});


// Declare a route

fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
  })
  

// Run the server!

export { fastify }

