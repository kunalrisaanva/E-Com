import { errorResponse } from "../utils/Error.js";
import { asyncHandler } from "../utils/AsynchHandler.js"
import jwt from "jsonwebtoken";


const verifyJwt = asyncHandler(
  async (req,reply) => {
    try {
      
    const token = req.cookie?.token || req.header['authrization'].replace("Bearer","");

  
      if(!token) {
          errorResponse("please provide token",401);      
      };
      

      const decoded = jwt.decode()

       // token decode and set into req.user variable 





    } catch (error) {
      console.log(error,"error");
    }
  }
)