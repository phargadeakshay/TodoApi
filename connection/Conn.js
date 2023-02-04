import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
process.env.DATABASE;
export default mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection Database Tshirt......"))
  .catch((err) => console.log("image 111111111111111111",err));
