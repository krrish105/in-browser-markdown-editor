"use client";
import MarkdownEditor from "@/component/Editor/MarkdownEditor";
import PreviewSection from "@/component/Editor/PreviewSection";
import { useState } from "react";

const MainEditor = ({ data }: { data: any }) => {
	const [preview, setPreview] = useState(false);
	const [markdownValue, setMarkdownValue] = useState(data.markdown);

	const onChangeHandler = (value: any) => {
		setMarkdownValue(value);
	};

	return (
		<main className={`grid ${preview ? "grid-cols-1" : "grid-cols-2"}`}>
			<form action='' method='post' className={`${preview ? "hidden" : ""}`}>
				<input type='hidden' name='name' id='name' value={data.name} />
				<input type='hidden' name='author' id='name' value={data.author} />
				<input type='hidden' name='slug' id='slug' value={data.slug} />

				<MarkdownEditor
					markdownValue={markdownValue}
					setMarkdownValue={onChangeHandler}
				/>
			</form>

			<PreviewSection markdownValue={markdownValue} setPreview={setPreview} />
		</main>
	);
};
export default MainEditor;
