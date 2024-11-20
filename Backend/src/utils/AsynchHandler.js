

// const asyncHandler = (fn) => (request, reply) =>{
//   Promise.resolve(fn(request, reply)).catch((e) => {

//         request.log.error(err)
//         reply.code(500).send({error:"Internal Server Error",message:err?.message})
//         // reply.code(500).send({ error: 'Internal Server Error', message: err.message }))
//   })

// }
//   }




const asyncHandler = (fn) => async (request, reply) => {
  try {
    return await fn(request, reply);
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'Internal Server Error', message: err.message });
  }
};

export { asyncHandler }