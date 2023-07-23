const Footer = () => {
	return (
		<div className='w-full relative'>
			<div className='absolute bottom-0 w-full h-[80rem] bg-gradient-to-t from-white to-transparent'></div>
			<div className='absolute bottom-0 w-full h-[30rem] border border-transparent rounded-t-[4rem] bg-blue-900'>
				<div className='absolute bottom-0 w-full h-[12rem] border border-transparent rounded-t-[4rem] bg-white'>
					<div className='container mx-auto px-12 pt-4'>
						bottom content
					</div>
				</div>
				<div className='container mx-auto px-12 pt-4 text-white'>
					top content
				</div>
			</div>
		</div>
	);
};

export default Footer;
