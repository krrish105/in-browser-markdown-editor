"use client";
import MarkdownEditor from "@/component/Editor/MarkdownEditor";
import PreviewSection from "@/component/Editor/PreviewSection";
import { useState } from "react";
import Header from "@/component/common/Header";
import Splitter, { SplitDirection } from "@devbookhq/splitter";

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
			<main>
				<Splitter
					direction={SplitDirection.Horizontal}
					initialSizes={!preview ? [50, 50] : [100]}
				>
					{!preview && (
						<MarkdownEditor
							markdownValue={markdownValue}
							setMarkdownValue={onChangeHandler}
						/>
					)}
					<PreviewSection
						markdownValue={markdownValue}
						setPreview={setPreview}
					/>
				</Splitter>
			</main>
		</>
	);
};
export default MainEditor;
