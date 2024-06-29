import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constants.js';

dotenv.config();

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URL}/${DB_NAME}`;
        console.log(`Connecting to MongoDB with connection string: ${connectionString}`);

        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`\n MongoDB connected !!! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MONGODB connection error', error);
        process.exit(1);
    }
};

export default connectDB;
