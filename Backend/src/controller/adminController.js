import { User } from "../model/user.model";
import { Product } from "../model/product.model.js";
import { successResponse } from "../utils/Response.js";
import { isValidObjectId } from "mongoose";
import { errorResponse } from "../utils/Error.js";

const adminAccess = async () => {
  const { userId } = req.query;

  if (!isValidObjectId(userId)) {
    errorResponse();
  }

  const userData = await User.findByIdAndUpdate(userId, {
    isAdmin: true,
  });

  successResponse();
};

export { adminAccess };
