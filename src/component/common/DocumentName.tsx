"use client";
import editPost from "@/functions/editPost";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DocumentName = ({
	_id,
	name,
	markdown,
}: {
	_id: string;
	name: string;
	markdown: string;
}) => {
	const [newName, setNewName] = useState(name);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (name !== newName) {
			editPost(
				setError,
				setSuccess,
				{
					_id,
					name: newName,
					markdown,
				},
				router
			);
		}
	}, [newName]);

	return (
		<div className='flex items-center gap-4'>
			<div>
				<Image src='/assets/icon-document.svg' width={14} height={16} alt='' />
			</div>
			<div>
				<div className='flex flex-col'>
					<label className='document_name_label'>Document Name</label>
					<input
						type='text'
						name='name'
						id='name'
						defaultValue={newName}
						className='document_name'
						onBlur={(e) => setNewName(() => e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default DocumentName;
