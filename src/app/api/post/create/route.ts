import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/database/connect";
import { authOptions } from "@/utilities/authOptions";
import errorHandler from "@/utilities/errorHandler";

export const POST = async (request: Request, response: Response) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		const { name, markdown } = await request.json();
		let slug = name.toLowerCase().split(" ").join("-");
		try {
			await connectDB();
			const newPost = await Post.create({
				name,
				markdown,
				author: session.user,
				slug,
			});
			return NextResponse.json(newPost, { status: 200 });
		} catch (error: any) {
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
