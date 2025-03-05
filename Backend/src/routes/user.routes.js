import { asyncHandler } from "../utils/AsynchHandler.js";
import {
  getUsers,
  signUpUser,
  signInUser,
  signOutUser,
} from "../controller/userController.js";
import { verifyJwt as authMiddleware } from "../middleware/authMiddleware.js";

export default async function userRoutes(fastify) {
  fastify.get("/all", asyncHandler(getUsers));
  fastify.post("/signup", asyncHandler(signUpUser));
  fastify.post("/signin", asyncHandler(signInUser));
  fastify.get("/protected", { preHandler: authMiddleware }, async (req, _) => {
    return { message: "You have accessed a protected route", user: req.user };
  });
  fastify.post(
    "/logout",
    { preHandler: authMiddleware },
    asyncHandler(signOutUser)
  );
  // fastify.post("/create", asyncHandler());
  // fastify.post('/create', asyncHandler(createUser));
}

export { userRoutes };
