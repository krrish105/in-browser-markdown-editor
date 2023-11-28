import { LogoutButton } from "@/component/buttons/AuthButtons";
import ToggleButton from "@/component/buttons/ToggleButton";
import NewDocumentButton from "@/component/buttons/NewDocumentButton";
import DocumentList from "@/component/common/DocumentList";

const AsideMenu = () => {
	return (
		<aside className='min-w-[250px] py-7 px-6 flex flex-col justify-between h-full'>
			<div>
				<h2 className='uppercase aside_menu'>My Documents</h2>
				<NewDocumentButton />
				<DocumentList />
			</div>
			<div>
				<LogoutButton />
				<ToggleButton />
			</div>
		</aside>
	);
};
export default AsideMenu;
