import './styles/header.scss';
import Logo from '../../resources/img/logo.png';
import { useState, useLayoutEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { animated, useSpring } from '@react-spring/web';
import useMeasure from 'react-use-measure';

const Header = () => {
	const [navClosed, setNavClosed] = useState(true);
	const [menuRef, { height }] = useMeasure();
	const collapsibleStyle = useSpring({
		from: { height: 0 },
		to: { height: navClosed ? 0 : height },
	});

	useLayoutEffect(() => {
		const setMenuChange = () => {
			if (window.innerWidth > 470) setNavClosed(false);
			else setNavClosed(true);
		};
		window.addEventListener('resize', setMenuChange);
		setMenuChange();
		return () => window.removeEventListener('resize', setMenuChange);
	}, []);

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
		<li className='menu-item'>
			<a
				href='#'
				className='nav-link'>
				{title}
			</a>
		</li>
	);

	return (
		<div className='header-container'>
			<div className='header-items'>
				<div className='logo'>
					<img
						src={Logo}
						className='w-36'
					/>
					<button
						className='menu-controll'
						onClick={() => setNavClosed(!navClosed)}>
						<FaBars />
					</button>
				</div>
				<div className='desktop-menu'>
					<ul className='menu'>
						{menuItems.map((item, index) => (
							<MenuItem
								title={item}
								key={index}
							/>
						))}
					</ul>
				</div>
				<div className='mobile-menu'>
					<animated.div
						style={{
							...collapsibleStyle,
							overflow: 'hidden',
						}}>
						<ul
							className='menu'
							ref={menuRef}>
							{menuItems.map((item, index) => (
								<MenuItem
									title={item}
									key={index}
								/>
							))}
						</ul>
					</animated.div>
				</div>
			</div>
		</div>
	);
};

export default Header;
