import { notFound } from "next/navigation";
import AsideMenuContainer from "@/component/common/AsideMenuContainer";
import Header from "@/component/common/Header";
import MainEditor from "@/component/Editor/MainEditor";
import { headers } from "next/headers";

async function getData(slug: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/${slug}`, {
		cache: "no-store",
		// headers: headers(),
	});

	if (res.status !== 200) {
		notFound();
	}
	return res.json();
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getData(params.slug).then((res) => res.post);

	return {
		title: `${post.name} | In-Browser Markdown Editor`,
	};
}

// Use generateMetadata for dynamic metadata
const Editor = async ({ params }: { params: { slug: string } }) => {
	const data = await getData(params.slug);

	return (
		<>
			<div className='flex h-screen'>
				<AsideMenuContainer />
				<div className='editor_container'>
					<MainEditor data={data.post} />
				</div>
			</div>
		</>
	);
};
export default Editor;
