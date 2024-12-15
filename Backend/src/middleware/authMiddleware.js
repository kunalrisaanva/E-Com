import { errorResponse } from "../utils/Error.js";
import { asyncHandler } from "../utils/AsynchHandler.js"

const verifyJwt = asyncHandler(
  async (req,reply) => {
    try {
      
      const token = req.header['authrization'].split('Bearer');
  
      if(!token) {
          
      }
    } catch (error) {
      
    }
  }
)