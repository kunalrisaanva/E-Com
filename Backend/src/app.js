import Fastify from "fastify";

const fastify = Fastify({
    logger:true
});


// Declare a route

fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
  })
  


// export the server  fastify 

export { fastify }

