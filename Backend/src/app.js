// import Fastify from "fastify";
// import cookiesParser from "cookie-parser";
// import fastifyCors from "@fastify/cors";
// import fastifyOauth2 from "@fastify/oauth2";
// import fastifyJwt from "@fastify/jwt";
// import fastifyCookie from "@fastify/cookie";
// import NodeCache from "node-cache";
// import { productRoutes } from "./routes/product.routes.js";
// import mailer from "./plugins/mailer.js"
// import mailRoutes from "./routes/mail.js"

// import { registerRoutes } from "./routes/index.js";
// import fastifyMultipart from "@fastify/multipart";

// const fastify = Fastify({
//   logger: true,
// });

// fastify.register(fastifyMultipart, {
//   addToBody: true, 
//   // limits: { fileSize: 5 * 1024 * 1024 },
// });


// console.log("Allowed CORS Origin:", process.env.FRONTEND_URL);

// fastify.register(fastifyCors, {
//   origin: process.env.FRONTEND_URL || "*", 
//   methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"], 
//   allowedHeaders: ["Content-Type", "Authorization"], 
//   credentials: true, 
// });


// // mailer plugin
// fastify.register(mailer);
// fastify.register(mailRoutes);

// //cookies

// fastify.register(fastifyCookie);

// // Add cache instance to Fastify
// const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 }); 

// fastify.register(fastifyJwt, {
//   secret: "thisismyscretmynameiskunalhahah", // Change this to a strong secret
//   cookie: {
//     cookieName: "token", // Name of the cookie storing the JWT
//     signed: false, // Set to `true` if using signed cookies
//   },
// });


// fastify.register(fastifyOauth2, {
//   name: "googleOAuth",
//   scope: ["profile", "email"],
//   credentials: {
//     client: {
//       id: process.env.GOOGLE_CLIENT_ID, 
//       secret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//     auth: fastifyOauth2.GOOGLE_CONFIGURATION,
//   },
//   startRedirectPath: "/auth/google",
//   callbackUri: "http://localhost:3333/auth/google/callback",
// });



// // Register routes
// registerRoutes(fastify);

// // Declare a route

// fastify.get("/", async function handler(request, reply) {
//   return { hello: "world" };
// });
// fastify.register(productRoutes, { prefix: "/api/v1" }); // Route registration

// // export the server  fastify

// export { fastify };
// export { cache }


import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyOauth2 from "@fastify/oauth2";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import NodeCache from "node-cache";
import { productRoutes } from "./routes/product.routes.js";
import mailer from "./plugins/mailer.js";
import mailRoutes from "./routes/mail.js";
import { registerRoutes } from "./routes/index.js";
import fastifyMultipart from "@fastify/multipart";

const fastify = Fastify({ logger: true });

fastify.register(fastifyMultipart, { addToBody: true });
console.log("cors origin URL:",process.env.FRONTEND_URL);
fastify.register(fastifyCors, { 
  origin:process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true 
});

// Mailer plugin
fastify.register(mailer);
fastify.register(mailRoutes);
fastify.register(fastifyCookie);

// Add cache instance to Fastify
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

fastify.register(fastifyJwt, {
  secret: "thisismyscretmynameiskunalhahah",
  cookie: { cookieName: "token", signed: false },
});

fastify.register(fastifyOauth2, {
  name: "googleOAuth",
  scope: ["profile", "email"],
  credentials: {
    client: {
      id: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.GOOGLE_CLIENT_SECRET,
    },
    auth: fastifyOauth2.GOOGLE_CONFIGURATION,
  },
  startRedirectPath: "/auth/google",
  callbackUri: process.env?.CALLBACK_URL || "http://localhost:3333/auth/google/callback",
});

// Register routes
registerRoutes(fastify);
fastify.get("/", async () => ({ hello: "world" }));
fastify.register(productRoutes, { prefix: "/api/v1" });

export { fastify, cache };

