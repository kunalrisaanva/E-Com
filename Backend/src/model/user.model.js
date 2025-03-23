import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: true, // Ensure email is unique
  },

  password: {
    type: String,
  },

  isAdmin: {
    type: Boolean,
    required: [true, "admin status is required"],
    default: false,
  },

  token: {
    type: String,
  },

  mob: {
    type: String,
  },

  refreshToken: {
    type: String,
  },

  accessToken: {
    type: String,
  },

  authType:{
    type: String,
    default: "local",
    enum: ["google", "local"]
  },
  
  googleId: {
    type:String
  },

  resetPasswordToken:{
    type: String,
    default: null
  },
  resetPasswordExpire:{
    type: Date,
  }

});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// userSchema.methods.generateRefreshToken = async function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });
// };

userSchema.methods.getResetPasswordToken = function () {
  // Create token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token and store in DB
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  // const hash = crypto.createHash("sha256").update("example").digest("hex");
  // console.log("hash token created ---->",hash);
  // Set expire time (2 minutes from now)
  this.resetPasswordExpire = Date.now() + 2 * 60 * 1000; // 2 minutes

  return resetToken;
};

const User = mongoose.model("User", userSchema);

export { User };
