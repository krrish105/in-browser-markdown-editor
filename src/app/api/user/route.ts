import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/database/connect";
import User from "@/models/User";
import { authOptions } from "@/utilities/authOptions";
import PostModel from "@/models/Post";

export const GET = async (request: Request) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		try {
			await connectDB();

			const user = await User.findById(session.user).populate({
				path: "posts",
				model: PostModel,
			});

			return NextResponse.json(
				{
					user: user,
				},
				{ status: 200 }
			);
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{
					error: error,
				},
				{ status: 500 }
			);
		}
	}
};
