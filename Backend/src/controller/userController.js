import { User } from "../model/user.model.js";
import { successResponse } from "../utils/Response.js";
import { errorResponse } from "../utils/Error.js";
import { isValidObjectId } from "mongoose";

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

const signInUser = async (req,reply) => {

  const {email,password} = req.body


  if (!email || !password) return errorResponse("please provide all fields");

  const user = await User.findOne({email});

  if(user) return errorResponse("user not found please register first");

  const isMatch = await user.comparePassword(password);

  if(!isMatch) return errorResponse("user email or password wrong please check once")
  
  // token create 
  // set into cookies 

  user.genrateToken()

  return reply
              .status(200)
              .send(successResponse(user,"user logged in successfully"));
  
}

const signOutUser = async (req,rep) => {

};

const changePassword = async (req,rep) => {



};

const updaterUserDetails = async () => {
  const { userId } = req.query;

  
  if (!isValidObjectId(userId)) {
    return errorResponse("Invalid userId", 401);
  }

  // const { username, email, mob } = req.body;

  const allowedUpdates = ["username","mob","email","password"];


  const updates = Object.keys(req.body);


  const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

  if(!isValidUpdate) errorResponse("invalid update request",400);





  const user = await User.findById(userId);

  if (!user) {
    return errorResponse("user not existed with this userId", 404);
  }


  // todo fix this lines
  user.username = username;
  user.email = email;
  user.mob = mob;

  // todo

  // check apply user give info only update that info
  // validation
};





export {
  getUsers,
  signUpUser,
  signOutUser,
  changePassword,
  updaterUserDetails,
};
