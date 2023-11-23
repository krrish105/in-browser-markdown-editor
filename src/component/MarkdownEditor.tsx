const MarkdownEditor = ({ markdownValue, setMarkdownValue, preview }: any) => {
	return (
		<section id='markdown' className={`h-full ${preview ? "hidden" : ""}`}>
			<h2 className='heading_s py-3 px-4 uppercase'>Markdown</h2>
			<div className='pt-6 pb-2 px-4 h-full'>
				<textarea
					name=''
					id=''
					value={markdownValue}
					onChange={(e) => setMarkdownValue(e.target.value)}
				></textarea>
			</div>
		</section>
	);
};

export default MarkdownEditor;
