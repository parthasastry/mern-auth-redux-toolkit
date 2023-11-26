import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MondoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
