const DocumentNameStatic = () => {
	return (
		<div className='flex items-center gap-4'>
			<div>
				<svg width='14' height='16' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z'
						fill='#FFF'
					/>
				</svg>
			</div>
			<div className='flex flex-col'>
				<div className='body_s'>Document Name</div>
				<div className='document_name'>untitled-document.md</div>
			</div>
		</div>
	);
};

export default DocumentNameStatic;
