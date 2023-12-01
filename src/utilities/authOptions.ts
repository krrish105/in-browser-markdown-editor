import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDB from "@/database/connect";

export const authOptions: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async session({ session }) {
			await connectDB();
			const sessionUser = await User.findOne({ email: session.user?.email });
			session.user = sessionUser._id;
			return session;
		},
		async signIn({ profile }) {
			try {
				await connectDB();
				const userExist = await User.findOne({
					email: profile?.email,
				});

				if (!userExist) {
					const user = await User.create({
						email: profile?.email,
						name: profile?.name,
					});
				}

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};
