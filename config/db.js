import mongoose from "mongoose";
import colors from "colors";

// morgan shows api requests in console
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error occured in mongodb: ${error}`.bgRed.white);
  }
};
export default connectDB;
