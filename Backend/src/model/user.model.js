import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // ✅ Added missing import

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
    required: [true, "password is required"],
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
});


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateToken = async function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};


userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const User = mongoose.model("User", userSchema);

export { User };
