import Image from "next/image";
import Link from "next/link";

const DocumentNameStatic = ({ name, slug }: { name: string; slug: string }) => {
	return (
		<div className='flex items-center gap-4'>
			<div>
				<Image src='/assets/icon-document.svg' width={14} height={16} alt='' />
			</div>
			<div className='flex flex-col'>
				<div className='body_s'>Document Name</div>
				{/* TODO: Convert this to link */}
				<Link href={`/editor/${slug}`} className='document_name'>
					{name}.md
				</Link>
			</div>
		</div>
	);
};

export default DocumentNameStatic;
