"use client";
import { useGlobalContext } from "@/context/store";
import DocumentNameStatic from "@/component/common/DocumentNameStatic";

const DocumentList = () => {
	const { user } = useGlobalContext();

	if (user && user.posts?.length > 0) {
		return (
			<ul className='mt-6 flex flex-col gap-6'>
				{user.posts.map((el: any, i: number) => {
					return (
						<li key={el.name}>
							<DocumentNameStatic name={el.name} slug={el.slug} />
						</li>
					);
				})}
			</ul>
		);
	} else {
		return <></>;
	}
};
export default DocumentList;
