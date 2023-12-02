"use client";
import MarkdownEditor from "@/component/Editor/MarkdownEditor";
import PreviewSection from "@/component/Editor/PreviewSection";
import { useState } from "react";
import Header from "@/component/common/Header";

const MainEditor = ({ data }: { data: any }) => {
	const [preview, setPreview] = useState(false);
	const [markdownValue, setMarkdownValue] = useState(data.markdown);

	const onChangeHandler = (value: any) => {
		setMarkdownValue(value);
	};

	return (
		<>
			<Header
				showControls={true}
				postData={data}
				updatedMarkdown={markdownValue}
			/>
			<main className={`grid ${preview ? "grid-cols-1" : "grid-cols-2"}`}>
				<div className={`${preview ? "hidden" : ""}`}>
					<MarkdownEditor
						markdownValue={markdownValue}
						setMarkdownValue={onChangeHandler}
					/>
				</div>

				<PreviewSection markdownValue={markdownValue} setPreview={setPreview} />
			</main>
		</>
	);
};
export default MainEditor;
