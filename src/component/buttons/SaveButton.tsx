import Image from "next/image";

const SaveButton = () => {
	return (
		<button className='button button_with_icon'>
			<Image src='/assets/icon-save.svg' width={16} height={16} alt='' />
			<span>Save Changes</span>
		</button>
	);
};

export default SaveButton;
