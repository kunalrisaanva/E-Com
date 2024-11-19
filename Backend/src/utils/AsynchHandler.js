


const asyncHandler = (fn) => async (request,reply) => Promise.resolve()



// const asyncHandler = (fn) => async (request, reply) => {
//     try {
//       await fn(request, reply);
//     } catch (error) {
//       // Log the error and send a response
//       reply.status(500).send({ error: error.message || 'An unexpected error occurred' });
//     }
//   };
  