import { errorResponse } from "../utils/Error.js";
import { asyncHandler } from "../utils/AsynchHandler.js";

const verifyJwt = asyncHandler(async (req, reply) => {
  try {
    const token = req.cookies?.token 
    // req.headers.authorization?.replace("Bearer","").trim(); // ✅ Fix extra space issue
      // req.cookies?.token ||

    console.log("\n🔐 JWT Token Extracted:",token); // ✅ Debugging

    if (!token) {
      return reply.code(401).send(errorResponse("Please provide token", 401));
    }

    const user = await req.jwtVerify(); // ✅ Verify JWT
    req.user = user;
  } catch (error) {
    console.error("❌ JWT Error:", error.message);
    reply.code(401).send({ error: "Unauthorized", message: "Invalid token" });
  }
});


export { verifyJwt };
