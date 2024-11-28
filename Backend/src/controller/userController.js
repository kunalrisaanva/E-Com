import {User} from '../model/user.model.js';
import { successResponse } from '../utils/Response.js';
import { errorResponse } from '../utils/Error.js';
import { isValidObjectId } from 'mongoose'; 

const getUsers = async (request, reply) => {
  //   const users = await User.find();
  //   return { users };
  return { message: "User created successfully" };
};


const signInUser = async () => {

 const {username, email , password , mob} = req.body;

 const isUserExisted = await User.findOne({
    $or: [
      {
        email:email,
        mob:mob
      }
    ]
 });

 if (isUserExisted) {
  errorResponse("user is already exitsted",409)
 }

 const createdUser = await User.create({
   username,
   email,
   password,
   mob
 })

// todo 
// token create and validation 

 successResponse(changePassword,"user has been created sucessfully")

}


const signOutUser = async () => {



}


const changePassword = async () => {

}

const updaterUserDetails = async () => {
  
  const { userId } = req.query;

  const {username,email,mob} = req.body

  if(!isValidObjectId(userId)){
    return errorResponse("Invalid userId",401)
  }

  const user = await User.findById(userId);


  if(!user){
  return errorResponse("user not existed with this userId",404)
  }

  user.username = username;
  user.email = email 
  user.mob = mob


  // todo

  // check apply user give info only update that info 
  // validation 




}



export { getUsers, signInUser , signOutUser ,changePassword,updaterUserDetails };
