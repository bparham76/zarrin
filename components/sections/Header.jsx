'use client';
import Link from 'next/link';
import './styles/header.scss';
import Logo from '../../public/img/logo.png';
import Image from 'next/image';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { GrClose } from 'react-icons/gr';
import { BsTextareaResize, BsLayoutTextSidebarReverse } from 'react-icons/bs';
import {
	MdDesignServices,
	MdOutlineCampaign,
	MdBusiness,
	MdOutlineContacts,
} from 'react-icons/md';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const containerRef = useRef();
	const [placeholderHeight, setPlaceholderHeight] = useState(100);

	const Menu =
		typeof document !== 'undefined' &&
		document.querySelector('div.navigation');

	const menuItems = [
		{
			label: 'بیلبورد ها',
			// link: '/billboards',
			link: '#',
			icon: <BsTextareaResize />,
			subs: [
				{ label: 'همه بیلبورد ها', link: '/billboards' },
				{
					label: 'بیلبوردهای مازندران',
					link: '/billboards/mazandaran',
				},
				{ label: 'بیلبوردهای گیلان', link: '/billboards/guilan' },
				{ label: 'بیلبوردهای چالوس', link: '/billboards/chalus' },
				{ label: 'بیلبوردهای تنکابن', link: '/billboards/tonekabon' },
			],
		},
		{
			label: 'وبلاگ',
			link: '/blog',
			icon: <BsLayoutTextSidebarReverse />,
		},
		{ label: 'خدمات', link: '/services', icon: <MdDesignServices /> },
		{ label: 'کمپین ها', link: '/campaigns', icon: <MdOutlineCampaign /> },
		{ label: 'ثبت سفارش', link: '/order', icon: <HiOutlineDocumentAdd /> },
		{ label: 'مشتری ها', link: '/customers', icon: <MdBusiness /> },
		{ label: 'درباره ما', link: '/about-us', icon: <MdOutlineContacts /> },
	];

	const SubMenu = ({ items, icon, title }) => {
		const [showSub, setShowSub] = useState(false);
		const [subParent, setSubParent] = useState();
		const [isLoading, setIsLoading] = useState(true);
		const [screenWidth, setScreenWidth] = useState();
		const subMenuAnchorRef = useRef();

		useLayoutEffect(() => {
			setSubParent(subMenuAnchorRef.current.getBoundingClientRect());

			setIsLoading(false);

			setScreenWidth(window.screen.width);

			window.addEventListener('resize', () => {
				setScreenWidth(window?.screen?.width);
				setSubParent(subMenuAnchorRef.current?.getBoundingClientRect());
			});
		}, []);

		useEffect(() => {
			if (!showSub) return;

			setScreenWidth(window?.screen?.width);
			setSubParent(subMenuAnchorRef.current?.getBoundingClientRect());
		}, [showSub]);

		return (
			<>
				<a
					ref={subMenuAnchorRef}
					onClick={() => setShowSub(showSub => !showSub)}
					className='flex gap-4'>
					{icon}
					{title}
				</a>
				{!isLoading && (
					<>
						<div
							className={
								'bg-white overflow-hidden md:z-20 md:absolute md:rounded-b-lg md:shadow-md md:shadow-z-gray flex-col items-start justify-start ' +
								(showSub ? 'flex' : 'hidden')
							}
							style={{
								top: subParent?.bottom + 1,
								right: screenWidth - subParent?.right,
							}}>
							{items?.map((item, index) => (
								<Link
									className='md:text-lg submenu ps-4 md:ps-0'
									key={index}
									href={item.link}>
									{item.label}
								</Link>
							))}
						</div>
						{showSub && (
							<div
								onClick={() => setShowSub(false)}
								className='hidden md:block fixed top-0 left-0 w-full h-full z-10 bg-transparent'></div>
						)}
					</>
				)}
			</>
		);
	};

	const NavItem = ({ title, link, icon, subs = undefined }) =>
		typeof subs != 'undefined' ? (
			<SubMenu
				items={subs}
				title={title}
				icon={icon}
			/>
		) : (
			<Link
				className='flex gap-4'
				href={link}>
				{icon}
				{title}
			</Link>
		);

	useEffect(() => {
		if (mobileNavOpen) {
			Menu?.parentNode.classList.add('show');
			setTimeout(() => {
				Menu?.parentNode.classList.add('open');
				Menu?.classList.add('open');
			}, 10);
		} else {
			Menu?.classList.remove('open');
			setTimeout(() => {
				Menu?.parentNode.classList.remove('open');
				setTimeout(() => {
					Menu?.parentNode.classList.remove('show');
				}, 100);
			}, 100);
		}
	}, [mobileNavOpen]);

	useLayoutEffect(() => {
		setPlaceholderHeight(
			containerRef.current?.getBoundingClientRect().height
		);
		if (typeof window != 'undefined')
			window.addEventListener('resize', e => {
				setPlaceholderHeight(
					containerRef.current?.getBoundingClientRect().height
				);
			});
	}, []);

	return (
		<>
			<div
				className='header-container'
				ref={containerRef}>
				<div className='logo relative'>
					<Link href='/'>
						<Image
							src={Logo}
							alt='zarrin-logo'
						/>
					</Link>
				</div>
				<div
					onClick={e => setMobileNavOpen(false)}
					className='menu'>
					<div
						onClick={e => e.stopPropagation()}
						className='navigation'>
						<div className='menu-logo'>
							<div className='relative'>
								<Image
									src={Logo}
									alt='zarrin-logo'
								/>
							</div>
							<div>
								<button onClick={e => setMobileNavOpen(false)}>
									<GrClose />
								</button>
							</div>
						</div>
						{menuItems.map((item, index) => (
							<NavItem
								key={index}
								title={item.label}
								link={item.link}
								icon={item.icon}
								subs={item?.subs ? item.subs : undefined}
							/>
						))}
					</div>
				</div>
				<div
					className='toggle-menu'
					onClick={e => setMobileNavOpen(true)}>
					<FaBars />
				</div>
			</div>
			<div
				className='w-full -z-10 bg-transparent left-0 top-0'
				style={{ height: placeholderHeight }}></div>
		</>
	);
};

export default Header;
