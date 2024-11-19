import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import { fastify } from "./app.js";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

console.log(process.env.PORT);

// db connection

connectDb()
  .then(() => {
    const PORT = process.env.PORT || 4000;

    fastify
      .listen({ port: PORT })
      .then(() => fastify.log.info(`Server is running on port ${PORT}`))
      .catch((e) => {
        fastify.log.error(e);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the process if DB connection fails
  });

