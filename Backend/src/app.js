import Fastify from "fastify";
import cookiesParser from "cookie-parser";
import fastifyCors from "@fastify/cors";
import fastifyOauth2 from "@fastify/oauth2";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import NodeCache from "node-cache";
import { productRoutes } from "./routes/product.routes.js";
import path from "node:path";
import fs from "node:fs/promises";
import axios from "axios";

// import pump from "pump"
import { registerRoutes } from "./routes/index.js";
// import multer from "fastify-multer"
import fastifyMultipart from "@fastify/multipart";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyMultipart, {
  addToBody: true, 
  // limits: { fileSize: 5 * 1024 * 1024 }, Set file size limit (e.g., 5MB)
});

//cors implimentation

fastify.register(fastifyCors, {
  origin: "http://localhost:3001", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
});

//cookies

fastify.register(fastifyCookie);

// Add cache instance to Fastify
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 }); 

fastify.register(fastifyJwt, {
  secret: "thisismyscretmynameiskunalhahah", // Change this to a strong secret
  cookie: {
    cookieName: "token", // Name of the cookie storing the JWT
    signed: false, // Set to `true` if using signed cookies
  },
});


// fastify.register(fastifyOauth2, {
//   name: "googleOAuth",
//   scope: ["profile", "email"],
//   credentials: {
//     client: {
//       id: process.env.GOOGLE_CLIENT_ID, // ✅ Ensure this matches your Google Cloud Console
//       secret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//     auth: fastifyOauth2.GOOGLE_CONFIGURATION,
//   },
//   startRedirectPath: "/auth/google",
//   callbackUri: "http://localhost:3333/auth/google/callback", // ✅ Ensure this matches Google Console
// });

// // // ✅ Fix Google OAuth Callback Route
// fastify.get("/auth/google/callback", async (req, reply) => {
//   try {
//     console.log("🔄 Google OAuth Callback Received:", req.query);

//     // ✅ Exchange Google code for an access token
//     const tokenResponse =
//       await fastify.googleOAuth.getAccessTokenFromAuthorizationCodeFlow(req);

//     if (!tokenResponse || !tokenResponse.token.access_token) {
//       return reply.send({ error: "OAuth failed", details: tokenResponse });
//     }

//     console.log("✅ Google OAuth Token:", tokenResponse.token.access_token);

//     // ✅ Fetch user details from Google
//     const { data: userInfo } = await axios.get(
//       "https://www.googleapis.com/oauth2/v2/userinfo",
//       {
//         headers: {
//           Authorization: `Bearer ${tokenResponse.token.access_token}`,
//         },
//       }
//     );

//     console.log("✅ Google User Info:", userInfo);

//     // ✅ Generate JWT Token
//     const jwtToken = fastify.jwt.sign(
//       {
//         id: userInfo.id,
//         name: userInfo.name,
//         email: userInfo.email,
//         picture: userInfo.picture,
//       },
//       { expiresIn: "1h" }
//     );

//     console.log("✅ JWT Token Generated:", jwtToken);

//     // ✅ Redirect user to Next.js frontend with the token
//     reply.redirect(`http://localhost:3000/profile?token=${jwtToken}`);
//   } catch (error) {
//     console.error("❌ OAuth Callback Error:", error);
//     reply.send({ error: "OAuth Callback Error", details: error.message });
//   }
// });

// // // ✅ Protected Route to Get Logged-in User Info
// fastify.get("/auth/me", async (req, reply) => {
//   try {
//     const user = await req.jwtVerify();
//     console.log("\n👤 User:", user);
//     reply.send(user);
//   } catch (err) {
//     reply.send({ error: "Unauthorized" });
//   }
// });

// fastify.get("/auth/logout", async (req, reply) => {
//   reply.send({ message: "Logout successful, remove token on frontend" });
// });

// fastify.decorate("cache", cache);

// Register routes
registerRoutes(fastify);

// Declare a route

fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});
fastify.register(productRoutes, { prefix: "/api/v1" }); // Route registration

// export the server  fastify

export { fastify };
export { cache }
