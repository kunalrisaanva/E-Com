import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST : ${connectionInstence.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection Failed ", error);
    process.exit(1);
  }
};


export { connectDb }
