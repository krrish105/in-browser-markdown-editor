"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/component/Alert/Alert";
import editPost from "@/functions/editPost";

const SaveButton = ({
	_id,
	name,
	markdown,
}: {
	_id: string;
	name: string;
	markdown: string;
}) => {
	const router = useRouter();
	const [error, setError] = useState();
	const [success, setSuccess] = useState();

	return (
		<>
			<button
				className='button button_with_icon'
				onClick={() =>
					editPost(setError, setSuccess, { _id, name, markdown }, router)
				}
			>
				<Image src='/assets/icon-save.svg' width={16} height={16} alt='' />
				<span>Save Changes</span>
			</button>
			{error && <Alert message={error} type='error' />}
			{success && <Alert message={success} type='success' />}
		</>
	);
};

export default SaveButton;
