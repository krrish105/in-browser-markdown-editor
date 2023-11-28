import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (process.env.MONGO_URL) {
			await mongoose.connect(process.env.MONGO_URL);
		}
	} catch (error) {
		throw new Error("Connection failed");
	}
};

export default connectDB;
