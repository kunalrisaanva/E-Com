import { User } from "../model/user.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";
import { isValidObjectId } from "mongoose";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import crypto from "crypto"; 

const getUsers = async (request, reply) => {
  //   const users = await User.find();
  //   return { users };
  return { message: "User fatched successfully" };
};

const signUpUser = async (request, reply) => {
  const { username, email, password } = request.body;

  const isUserExisted = await User.findOne({ email });

  if (isUserExisted) {
    return reply.status(400).send(errorResponse("User already exists", 409));
  }

  const createdUser = await User.create({ username, email, password });

  if (!createdUser) {
    return reply
      .status(500)
      .send(errorResponse("Something went wrong while creating the user"));
  }

  return reply
    .status(201)
    .send(successResponse(createdUser, "User has been created successfully"));
};

const signInUser = async (req, reply) => {
  const { email, password } = req.body;

  if (!email || !password) return errorResponse("please provide all fields");

  const user = await User.findOne({ email });

  if (!user) throw errorResponse("user not found please register first");

  const isMatch = await user.comparePassword(password);
  // console.log("\n",isMatch);

  if (!isMatch) {
    return reply
      .status(401)
      .send(errorResponse("Email or password is incorrect"));
  }

  const token = await user.generateAccessToken();

  console.log("\n token --->", token);

  reply
    .setCookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
    })
    .header("Authorization", `Bearer ${token}`)
    .status(200)
    .send(successResponse({ user, token }, "User logged in successfully"));
};

const signOutUser = async (req, rep) => {
  try {
    rep.clearCookie("token", { path: "/" }); 
    return rep.status(200).send({ message: "Logout successful" });
  } catch (error) {
    console.error(" Logout Error:", error.message);
    rep.status(500).send({ error: "Logout failed" });
  }
};

const changePassword = async (req, rep) => {};

const updaterUserDetails = async () => {
  const { userId } = req.query;
  // user: req.user
  if (!isValidObjectId(userId)) {
    return errorResponse("Invalid userId", 401);
  }

  // const { username, email, mob } = req.body;

  const allowedUpdates = ["username", "mob", "email", "password"];

  const updates = Object.keys(req.body);

  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) errorResponse("invalid update request", 400);

  const user = await User.findById(userId);

  if (!user) {
    return errorResponse("user not existed with this userId", 404);
  }

  // todo fix this lines

  // if user.username = username;
  user.username = username;
  user.email = email;
  user.mob = mob;

  // todo

  // check apply user give info only update that info
  // validation
};

const forgotPassword = async (req, rep) => {
  const { email } = req.body;

  if (!email) {
    throw errorResponse("Please provide an email", 400);
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    throw errorResponse("User not found", 404);
  }

  // Generate reset token
  const resetToken = userExist.getResetPasswordToken();

  // Save user with reset token & expiry
  await userExist.save({ validateBeforeSave: false });

  try {
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    await req.server.mailer.sendMail({
      to: email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: ${resetLink}`,
      html: `<p>You requested a password reset. Click the button below:</p>
             <p><a href="${resetLink}" style="background: red; color: white; padding: 10px; text-decoration: none;">Reset Password</a></p>
             <p>This link will expire in <b>2 minutes</b>.</p>`,
    });

    return rep.send({ success: "Email sent successfully!", resetLink });
  } catch (error) {
    console.error(" Error sending email:", error);
    return rep.code(500).send({ error: "Email sending failed" });
  }
};


const resetPassword = async (req, rep) => {
  const { token, newPassword } = req.body;

  // console.log("Reset Token Received:", token);

  if (!token || !newPassword) {
    return rep.code(400).send({ error: "Invalid request" });
  }

  // Hash token to match stored hash
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() }, // Ensure token is not expired
  });

  if (!user) {
    return rep.code(400).send({ error: "Invalid or expired token" });
  }

  // Update user password
  user.password = newPassword;
  user.resetPasswordToken = undefined; // Remove token
  user.resetPasswordExpire = undefined;

  await user.save();

  return rep.send({ success: "Password reset successfully" });
};






export {
  getUsers,
  signUpUser,
  signInUser,
  signOutUser,
  changePassword,
  updaterUserDetails,
  forgotPassword,
  resetPassword
};
