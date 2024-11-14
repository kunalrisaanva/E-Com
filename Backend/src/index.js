import { connectDb } from "./db/connectDb.js";
import { fastify } from "./app.js";

// db connection

connectDb().then(() => {
  // start server

  fastify
    .listen({ port: 2000 })
    .then(() => console.log(``))
    .catch((e) => {
      fastify.log.error(error);
      process.exit(1);
    });
});
