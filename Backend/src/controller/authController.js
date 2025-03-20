import axios from "axios";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const googleAuthCallback = async (req, reply) => {
  try {
    console.log("🔄 Google OAuth Callback Received:", req.query);


    const tokenResponse =
      await req.server.googleOAuth.getAccessTokenFromAuthorizationCodeFlow(req);
    if (!tokenResponse?.token?.access_token) {
      return reply.code(400).send({ error: "OAuth failed" });
    }

    
    const { data: userInfo } = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.token.access_token}`,
        },
      }
    );

  

  
    const user = await User.findOneAndUpdate(
      { email: userInfo.email },
      {
        googleId: userInfo.id,
        username: userInfo.name,
        email: userInfo.email,
        avatar: userInfo.picture,
        authType: "google",
      },
      { new: true, upsert: true }
    );

  
    const jwtToken = await user.generateAccessToken();
    console.log("✅ JWT Token Generated:", jwtToken);

 
  reply.redirect("http://localhost:3000/login?token=" + jwtToken);


  } catch (error) {
    console.error("OAuth Callback Error:", error);
    reply
      .code(500)
      .send({ error: "OAuth Callback Error", details: error.message });
  }
};

// export const getAuthUser = async (req, reply) => {
//   try {
//     const token = req.cookies.token || req.headers.authorization.split(" ")[1];
//     console.log("tokennn from bakcend side --->>>",token);
//     if (!token) return reply.code(401).send({ error: "Unauthorized" });

//     // const user = await req.jwtVerify();
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // req.user = decoded;
//     console.log("decoded token data --->\n",decoded);
//     reply.send(token);
//   } catch (err) {
//     reply.code(401).send({ error: "Unauthorized", message: "Invalid token" });
//   }
// };

export const getAuthUser = async (req, reply) => {
  try {
    
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    console.log("🔹 Token received at backend:", token);

    if (!token)
      return reply.code(401).send({ error: "Unauthorized, No Token" });

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token Data:", decoded);

   
    const user = await User.findById(decoded.id).select("-password");

    if (!user) return reply.code(404).send({ error: "User not found" });

    
    reply.send({ success: true, user });
  } catch (err) {
    console.error("Token Verification Error:", err);
    reply.code(401).send({ error: "Unauthorized", message: "Invalid token" });
  }
};

export const logoutUser = async (req, reply) => {
  reply.clearCookie("token");
  reply.send({ message: "Logout successful, token removed" });
};
