"use client";
import MarkdownEditor from "@/component/MarkdownEditor";
import PreviewSection from "@/component/PreviewSection";
import { useState } from "react";

const MainEditor = () => {
	const [markdownValue, setMarkdownValue] = useState("");
	const [markdownPreview, setMarkdownPreview] = useState("");

	const onChangeHandler = (value: any) => {
		setMarkdownValue(value);
		setMarkdownPreview(value);
	};

	return (
		<main className='grid grid-cols-2'>
			<MarkdownEditor
				markdownValue={markdownValue}
				setMarkdownValue={onChangeHandler}
			/>
			<PreviewSection markdownPreview={markdownPreview} />
		</main>
	);
};
export default MainEditor;
