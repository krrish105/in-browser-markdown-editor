import DeleteButton from "@/component/buttons/DeleteButton";
import DocumentName from "@/component/common/DocumentName";
import Logo from "@/component/common/Logo";
import SaveButton from "@/component/buttons/SaveButton";

const Header = ({
	showControls,
	postData,
}: {
	showControls: boolean;
	postData: any;
}) => {
	return (
		<header className='flex justify-between items-center pr-6'>
			<div className='flex items-center pl-20 py-3'>
				<Logo />
				{showControls && (
					<>
						<div className='w-[1px] h-10 bg-[#5A6069] mx-6'></div>
						<DocumentName
							name={postData.name}
							markdown={postData.markdown}
							author={postData.author}
						/>
					</>
				)}
			</div>
			{showControls && (
				<div className='flex items-center gap-4'>
					<DeleteButton slug={postData.slug} />
					<SaveButton />
				</div>
			)}
		</header>
	);
};

export default Header;
