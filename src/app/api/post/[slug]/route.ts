import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/database/connect";
import Post from "@/models/Post";
import { authOptions } from "@/utilities/authOptions";
import errorHandler from "@/utilities/errorHandler";

export const GET = async (request: Request, { params }: any) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		let { slug } = params;

		try {
			await connectDB();
			const post = await Post.findOne({ slug: slug, author: session.user });

			if (post) {
				return NextResponse.json(
					{
						post: post,
					},
					{ status: 200 }
				);
			}
			return new NextResponse("NOT FOUND", { status: 404 });
		} catch (error) {
			return NextResponse.json(
				{
					error: error,
				},
				{ status: 500 }
			);
		}
	}
};
