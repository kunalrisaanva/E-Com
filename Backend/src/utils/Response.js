// response.js (Fastify)
const successResponse = (data, message = "Request successful", statusCode = 200) => {
  return {
    success: true,
    data,
    message,
    statusCode
  };
};

export { successResponse };
