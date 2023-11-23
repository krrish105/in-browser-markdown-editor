import AsideMenu from "@/component/AsideMenu";
import Header from "@/component/Header";
import MainEditor from "@/component/MainEditor";

export default function Home() {
	return (
		<>
			<div className='flex h-full'>
				<AsideMenu />
				<div className='w-full h-full'>
					<Header />
					<MainEditor />
				</div>
			</div>
		</>
	);
}
