"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import handleSubmit from "@/functions/createPost";
import Alert from "@/component/Alert/Alert";
import { useGlobalContext } from "@/context/store";

const NewDocumentButton = () => {
	const { user } = useGlobalContext();
	const router = useRouter();
	const [error, setError] = useState();
	const [success, setSuccess] = useState();

	return (
		<>
			<button
				className='button mt-7 w-full'
				onClick={(e) =>
					handleSubmit(
						e,
						setError,
						setSuccess,
						{
							name: `New Document ${user.posts?.length + 1}`,
							markdown: "",
							author: user._id,
						},
						router
					)
				}
			>
				+ New Document
			</button>
			{error && <Alert message={error} type='error' />}
			{success && <Alert message={success} type='success' />}
		</>
	);
};

export default NewDocumentButton;
