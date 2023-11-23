"use client";
import MarkdownEditor from "@/component/MarkdownEditor";
import PreviewSection from "@/component/PreviewSection";
import { useState } from "react";

const MainEditor = () => {
	const [preview, setPreview] = useState(false);
	const [markdownValue, setMarkdownValue] = useState("");
	const [markdownPreview, setMarkdownPreview] = useState("");

	const onChangeHandler = (value: any) => {
		setMarkdownValue(value);
		setMarkdownPreview(value);
	};

	return (
		<main className={`grid ${preview ? "grid-cols-1" : "grid-cols-2"}`}>
			<MarkdownEditor
				markdownValue={markdownValue}
				setMarkdownValue={onChangeHandler}
				preview={preview}
			/>
			<PreviewSection
				markdownPreview={markdownPreview}
				preview={preview}
				setPreview={setPreview}
			/>
		</main>
	);
};
export default MainEditor;
