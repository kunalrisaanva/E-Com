import dotenv from "dotenv";
// import { connectDb } from "../src/db/connectDb.js";
// import { fastify } from "../src/app.js";
// import {connectDb} from "../src/db/connectDb.js"
import {connectDb} from "../src/db/connectDb.js"
import { fastify } from "../src/app.js";

dotenv.config();

// Ensure database connection
await connectDb();
// console.log("object");

export default async function handler(req, res) {
  await fastify.ready();
  fastify.server.emit("request", req, res);
}
