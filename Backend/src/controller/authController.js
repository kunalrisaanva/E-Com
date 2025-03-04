import axios from "axios";
// import { User } from "../model/user.model";

export const googleAuthCallback = async (req, reply) => {
  try {
    console.log("🔄 Google OAuth Callback Received:", req.query);

    // ✅ Exchange Google code for an access token
    const tokenResponse = await req.server.googleOAuth.getAccessTokenFromAuthorizationCodeFlow(req);

    if (!tokenResponse || !tokenResponse.token.access_token) {
      return reply.send({ error: "OAuth failed", details: tokenResponse });
    }

    console.log("✅ Google OAuth Token:", tokenResponse.token.access_token);

    // ✅ Fetch user details from Google
    const { data: userInfo } = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenResponse.token.access_token}` },
      }
    );

    console.log("✅ Google User Info:", userInfo);

    // ✅ Store or Update User in Database (if using DB)
    // let user = await User.findOne({ email: userInfo.email });
    // if (!user) {
    //   user = await User.create({
    //     googleId: userInfo.id,
    //     name: userInfo.name,
    //     email: userInfo.email,
    //     avatar: userInfo.picture,
    //     authType: "google",
    //   });
    // }

    // ✅ Generate JWT Token
    const jwtToken = await reply.jwtSign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      { expiresIn: "1h" }
    );

    console.log("✅ JWT Token Generated:", jwtToken);

    // ✅ Store JWT in HttpOnly Cookie
    reply.setCookie("token", jwtToken, {
      httpOnly: true,
      secure: false, // Set `true` in production
      sameSite: "strict",
      path: "/",
    });

    // ✅ Redirect user to frontend (without exposing token in URL)
    reply.redirect("http://localhost:3000/profile");
  } catch (error) {
    console.error("❌ OAuth Callback Error:", error);
    reply.send({ error: "OAuth Callback Error", details: error.message });
  }
};

export const getAuthUser = async (req, reply) => {
  try {
    const token = req.cookies.token;
    if (!token) return reply.code(401).send({ error: "Unauthorized" });

    const user = await req.jwtVerify();
    reply.send(user);
  } catch (err) {
    reply.code(401).send({ error: "Unauthorized", message: "Invalid token" });
  }
};

export const logoutUser = async (req, reply) => {
  reply.clearCookie("token");
  reply.send({ message: "Logout successful, token removed" });
};
