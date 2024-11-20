import {asyncHandler} from '../utils/AsynchHandler.js';
import { getUsers, createUser } from "../controller/userController.js";

export default async function userRoutes(fastify) {
  fastify.get('/all', asyncHandler(getUsers));
  fastify.post('/create', asyncHandler(createUser));
}
