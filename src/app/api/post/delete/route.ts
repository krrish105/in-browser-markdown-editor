import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/database/connect";
import { authOptions } from "@/utilities/authOptions";
import errorHandler from "@/utilities/errorHandler";

export const DELETE = async (request: Request, { params }: any) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		const { _id } = await request.json();

		try {
			await connectDB();

			const post = await Post.findOneAndDelete({ _id, author: session.user });
			if (post) {
				return NextResponse.json(post, { status: 200 });
			}

			return new NextResponse("NOT FOUND", { status: 404 });
		} catch (error) {
			const customError = errorHandler(error);
			return NextResponse.json(
				{
					message: customError.message,
					errorFields: customError.errorFields,
				},
				{ status: customError.statusCode }
			);
		}
	}
};
