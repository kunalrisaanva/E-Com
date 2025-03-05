import { errorResponse } from "../utils/Error.js";
import { asyncHandler } from "../utils/AsynchHandler.js";
import jwt from "jsonwebtoken";

const verifyJwt = asyncHandler(async (req, reply) => {
  try {
    // Extract token from cookies or headers
    const token = req.cookies?.token || req.headers.authorization?.replace("Bearer ", "").trim();

    console.log("\n🔐 JWT Token Extracted:", token);

    if (!token) {
      return reply.code(401).send(errorResponse("Please provide a token", 401));
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    
  } catch (error) {
    console.error("JWT Error:", error.message);
    reply.code(401).send({ error: "Unauthorized", message: "Invalid token" });
  }
});

export  {verifyJwt};
