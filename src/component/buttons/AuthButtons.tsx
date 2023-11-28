"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function GoogleSignInButton() {
	const handleClick = () => {
		signIn("google", { callbackUrl: "/editor" });
	};

	return (
		<button
			onClick={() => handleClick()}
			className='w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200'
		>
			<Image src='/google.png' alt='Google Logo' width={20} height={20} />
			<span className='ml-4'>Continue with Google</span>
		</button>
	);
}

export function GithubSignInButton() {
	const handleClick = () => {
		signIn("github", { callbackUrl: "/editor" });
	};

	return (
		<button
			onClick={() => handleClick()}
			className='w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200'
		>
			<Image src='/github.png' alt='Github Logo' width={20} height={20} />
			<span className='ml-4'>Continue with Github</span>
		</button>
	);
}

export function LogoutButton() {
	const handleClick = () => {
		signOut();
	};

	return (
		<button onClick={() => handleClick()} className='button w-full mb-6'>
			<span className='ml-4'>Logout</span>
		</button>
	);
}
