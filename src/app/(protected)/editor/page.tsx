import AsideMenuContainer from "@/component/common/AsideMenuContainer";
import Header from "@/component/common/Header";

export default function Editor() {
	return (
		<>
			<div className='flex h-screen'>
				<AsideMenuContainer />
				<div className='editor_container'>
					<Header showControls={false} postData={null} />
					<div>No Document Selected</div>
				</div>
			</div>
		</>
	);
}
