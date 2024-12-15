// response.js (Fastify)
const successResponse = (data, message = "Request successful", statusCode) => {
  return {
    success: true,
    data,
    message,
    statusCode
  };
};

export { successResponse };
