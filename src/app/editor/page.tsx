import AsideMenuContainer from "@/component/AsideMenuContainer";
import Header from "@/component/Header";
import MainEditor from "@/component/MainEditor";

export default function Editor() {
	return (
		<>
			<div className='flex h-full'>
				<AsideMenuContainer />
				<div className='w-full h-full'>
					<Header />
					<MainEditor />
				</div>
			</div>
		</>
	);
}
