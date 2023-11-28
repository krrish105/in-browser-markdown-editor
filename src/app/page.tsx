import {
	GithubSignInButton,
	GoogleSignInButton,
} from "@/component/buttons/AuthButtons";
import Logo from "@/component/common/Logo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utilities/authOptions";

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect("/editor");
	} else {
		return (
			<>
				<header className='py-6'>
					<div className='container'>
						<Logo />
					</div>
				</header>
				<main className='container flex gap-16 items-center lg:justify-center flex-wrap lg:flex-nowrap px-6 home_main'>
					<p className='text-6xl lg:text-8xl max-w-2xl text-white'>
						Transform Your Markdown into Text with Ease
					</p>
					<div className='w-full'>
						<GoogleSignInButton />
						<GithubSignInButton />
					</div>
				</main>
			</>
		);
	}
}
