"use client";
import { useState } from "react";
import AsideMenu from "@/component/common/AsideMenu";

const AsideMenuContainer = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className='relative h-full'>
			{openMenu && <AsideMenu />}

			<button
				className={`py-6 p-6 menu_button absolute -right-[80px] top-0 ${
					openMenu && "open"
				}`}
				onClick={() => setOpenMenu((prev) => !prev)}
			>
				<span></span>
				<span></span>
				<span></span>
				<div className='sr-only'>Open Menu</div>
			</button>
		</div>
	);
};
export default AsideMenuContainer;
