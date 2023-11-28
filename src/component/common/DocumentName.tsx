import Image from "next/image";

const DocumentName = ({
	name,
	markdown,
	author,
}: {
	name: string;
	markdown: string;
	author: string;
}) => {
	return (
		<div className='flex items-center gap-4'>
			<div>
				<Image src='/assets/icon-document.svg' width={14} height={16} alt='' />
			</div>
			<div>
				<form>
					<input type='hidden' name='markdown' id='markdown' value={markdown} />
					<input type='hidden' name='author' id='author' value={author} />
					<div className='flex flex-col'>
						<label className='document_name_label'>Document Name</label>
						<input
							type='text'
							name='name'
							id='name'
							defaultValue={name}
							className='document_name'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default DocumentName;
