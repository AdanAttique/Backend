import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\n MongoDB connected !!! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
