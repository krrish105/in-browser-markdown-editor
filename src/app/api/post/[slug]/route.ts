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
			const post = await Post.findOne({ slug: slug });

			if (post) {
				return NextResponse.json(
					{
						post: post,
					},
					{ status: 200 }
				);
			}
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

export const PATCH = async (request: Request, { params }: any) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		const { _id, name, markdown, author } = await request.json();
		let slug = name.toLowerCase().split(" ").join("-");
		try {
			await connectDB();

			const post = await Post.findByIdAndUpdate(
				_id,
				{
					name,
					markdown,
					author,
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

export const DELETE = async (request: Request, { params }: any) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ message: "You are not logged in." });
	} else {
		const { slug } = params;
		try {
			await connectDB();

			const post = await Post.findOneAndDelete({ slug });
			if (post) {
				return NextResponse.json(post, { status: 200 });
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
