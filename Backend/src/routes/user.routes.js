import { asyncHandler } from "../utils/AsynchHandler.js";
import {
  getUsers,
  signUpUser,
  signInUser,
  signOutUser,
  forgotPassword,
  resetPassword
  
} from "../controller/userController.js";
import { verifyJwt as authMiddleware } from "../middleware/authMiddleware.js";

export default async function userRoutes(fastify) {
  fastify.get("/all", asyncHandler(getUsers));
  fastify.post("/signup", asyncHandler(signUpUser));
  fastify.post("/signin", asyncHandler(signInUser));
  fastify.get("/protected", { preHandler: authMiddleware }, async (req, _) => {
    return { message: "You have accessed a protected route", user: req.user };
  });
  // fastify.post("/send-mail",asyncHandler(sendMail))
  fastify.post(
    "/logout",
    { preHandler: authMiddleware },
    asyncHandler(signOutUser)
  );
  fastify.post("/forget-password", asyncHandler(forgotPassword));
  fastify.post("/reset-password",asyncHandler(resetPassword));
  // fastify.post("/create", asyncHandler());
  // fastify.post('/create', asyncHandler(createUser));
}





export { userRoutes };
