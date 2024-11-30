// response.js (Fastify)
const successResponse = (data, message = "Request successful") => {
  return {
    success: true,
    data,
    message,
  };
};

export { successResponse };
