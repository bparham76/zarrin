import Logo from '../../resources/img/logo.png';

const Header = () => {
	const menuItems = [
		'بیلبورد ها',
		'وبلاگ',
		'خدمات',
		'کمپین ها',
		'ثبت سفارش',
		'مشتری ها',
		'درباره ما',
	];

	const MenuItem = ({ title }) => (
		<li className='ps-16 text-2xl'>
			<a
				href='#'
				className='hover:text-cyan-500 text-cyan-800 transition-all duration-300'>
				{title}
			</a>
		</li>
	);

	return (
		<div className='bg-white w-full shadow-header'>
			<div className='container mx-auto flex align-middle justify-between'>
				<div className='basis-3/12 flex items-center'>
					<img
						src={Logo}
						className='w-36'
					/>
				</div>
				<div className='basis-9/12 flex justify-end'>
					<ul className='flex flex-row items-center'>
						{menuItems.map((item, index) => (
							<MenuItem
								title={item}
								key={index}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
