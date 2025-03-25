// import dotenv from "dotenv";
// import { connectDb } from "./db/connectDb.js";
// import { fastify } from "./app.js";

// // Load environment variables
// dotenv.config();

// // Database connection
// connectDb()
//   .then(() => {
//     const PORT = process.env.PORT || 4000;

//     fastify
//       .listen({ port: PORT, host: "0.0.0.0" }) 
//       .then(() => fastify.log.info(`\n 🚀 Server is running on port ${PORT}`))
//       .catch((e) => {
//         fastify.log.error(e);
//         process.exit(1);
//       });
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database:", err);
//     process.exit(1); 
//   });


import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import { fastify } from "./app.js";

dotenv.config();

// Ensure DB connection before handling requests
connectDb()
  .then(() => console.log("🚀 Database Connected!"))
  .catch((err) => {
    console.error("❌ Error connecting to DB:", err);
    process.exit(1);
  });

// ✅ Correctly export Fastify for Vercel
export default async (req, res) => {
  await fastify.ready();
  fastify.server.emit("request", req, res);
};


