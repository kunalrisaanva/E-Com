import { asyncHandler } from "../utils/AsynchHandler.js";
import { getUsers,signUpUser } from "../controller/userController.js";

export default async function userRoutes(fastify) {
  fastify.get("/all", asyncHandler(getUsers));
  fastify.post("/signup",asyncHandler(signUpUser))
  // fastify.post("/create", asyncHandler());
  // fastify.post('/create', asyncHandler(createUser));
}


export { userRoutes };