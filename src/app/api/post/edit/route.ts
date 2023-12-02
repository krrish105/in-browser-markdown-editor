import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/database/connect";
import { authOptions } from "@/utilities/authOptions";
import errorHandler from "@/utilities/errorHandler";

export const PATCH = async (request: Request, response: Response) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		const { _id, name, markdown } = await request.json();
		let slug = name.toLowerCase().split(" ").join("-");

		try {
			await connectDB();

			const post = await Post.findOneAndUpdate(
				{
					_id,
					author: session.user,
				},
				{
					name,
					markdown,
					slug,
				},
				{
					new: true,
					runValidators: true,
				}
			);

			if (post) {
				await post.save();
				return NextResponse.json(post, { status: 200 });
			}
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
