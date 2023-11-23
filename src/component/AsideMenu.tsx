import DocumentNameStatic from "@/component/DocumentNameStatic";
import ToggleButton from "@/component/ToggleButton";

const AsideMenu = () => {
	return (
		<aside className='min-w-[250px] py-7 px-6 flex flex-col justify-between hidden'>
			<div>
				<h2 className='uppercase aside_menu'>My Documents</h2>
				<button className='button mt-7 w-full'>+ New Document</button>
				<ul className='mt-6 flex flex-col gap-6'>
					<li>
						<DocumentNameStatic />
					</li>
				</ul>
			</div>

			<ToggleButton />
		</aside>
	);
};
export default AsideMenu;
