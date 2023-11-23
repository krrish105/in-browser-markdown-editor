import DeleteButton from "@/component/DeleteButton";
import DocumentName from "@/component/DocumentName";
import Logo from "@/component/Logo";
import SaveButton from "@/component/SaveButton";

const Header = () => {
	return (
		<header className='flex justify-between items-center pr-6'>
			<div className='flex items-center pl-20 py-3'>
				<Logo />
				<div className='w-[1px] h-10 bg-[#5A6069] mx-6'></div>
				<DocumentName />
			</div>
			<div className='flex items-center gap-4'>
				<DeleteButton />
				<SaveButton />
			</div>
		</header>
	);
};

export default Header;
