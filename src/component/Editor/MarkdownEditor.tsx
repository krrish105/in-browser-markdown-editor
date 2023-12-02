const MarkdownEditor = ({
	markdownValue,
	setMarkdownValue,
}: {
	markdownValue: string;
	setMarkdownValue: any;
}) => {
	return (
		<section id='markdown'>
			<h2 className='heading_bg heading_s py-3 px-4 uppercase'>Markdown</h2>
			<div className='pt-6 pb-2 px-4 max_h_editors'>
				<textarea
					name='markdown'
					id='markdown'
					value={markdownValue}
					onChange={(e) => setMarkdownValue(e.target.value)}
				></textarea>
			</div>
		</section>
	);
};

export default MarkdownEditor;
