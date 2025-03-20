import { googleAuthCallback, getAuthUser, logoutUser } from "../controller/authController.js";

export default async function authRoutes(fastify, options) {
  // ✅ Google OAuth2 Callback Route
  fastify.get("/auth/google/callback", googleAuthCallback);

  // ✅ Protected Route to Get Logged-in User Info
  fastify.get("/auth/me", getAuthUser);

  // ✅ Logout Route
  fastify.get("/auth/logout", logoutUser);
}

export {authRoutes}