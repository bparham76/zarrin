'use client';
import './styles/footer.scss';
import { BsEnvelopeAt, BsTextareaResize } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

import { LiaMapMarkedAltSolid } from 'react-icons/lia';

import { BiHomeAlt2, BiInfoCircle, BiLogoInstagram } from 'react-icons/bi';
import { MdCall, MdDesignServices } from 'react-icons/md';
// import RZ from "../../resources/img/reza zarin 02.png";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = ({ quickAccess = true }) => {
	const router = useRouter();

	const QuickAccess = () => (
		<div className='quickaccess'>
			<div>دسترسی سریع</div>
			<div>
				<Link href='/'>صفحه اصلی</Link>
			</div>
			<div>
				<Link href='/about-us'>تماس با ما</Link>
			</div>
			<div>
				<Link href='/blog'>مقالات</Link>
			</div>
			<div>
				<Link href='/billboards'>همه بیلبوردها</Link>
			</div>
			<div>
				<Link href='/billboards/mazandaran'>بیلبورد های مازندران</Link>
			</div>
			<div>
				<Link href='/billboards/guilan'>بیلبورد های گیلان</Link>
			</div>
			<div>
				<Link href='/billboards/chalus'>بیلبورد های چالوس</Link>
			</div>
			<div>
				<Link href='/billboards/tonekabon'>بیلبورد های تنکابن</Link>
			</div>
		</div>
	);
	const Mascot = () => (
		<div className='mascot'>
			<div style={{ position: 'relative', width: '100%' }}>
				<Image
					src={'/img/reza zarin 02.png'}
					alt='reza zarin'
					width={0}
					height={0}
					sizes='100vh'
					style={{ height: 'auto', width: '100%' }}
				/>
			</div>
			<div>
				<h4>رضا زرین</h4>
				<p>
					رضا زرین کار خود را در زمینه بیلبوردهای تبلیغاتی در سال 1393
					شروع کرد و در این سال ها به دلیل قیمت مناسب و خدمات متفاوت
					در طراحی و کیفیت چاپ و همپنین سرعت در اجرای بیلبورد توانسته
					جایگاه ارزنده ای را در میان رقبای خود کسب کند.
				</p>
			</div>
		</div>
	);

	const MobileFooter = () => {
		return (
			<>
				<div className='sm:block md:hidden w-full h-24 left-0 bottom-0 bg-white'></div>
				<div className='mobile-footer z-40'>
					<div className='absolute top-0 left-0 -z-10 w-full h-full'>
						<div className='w-full h-full relative'>
							<Image
								src='/svg/footer-menu.svg'
								alt=''
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<button onClick={() => router.push('/')}>
						<BiHomeAlt2 />
						<p>خانه</p>
					</button>
					<button onClick={() => router.push('/billboards')}>
						<BsTextareaResize />
						<p>بیلبوردها</p>
					</button>
					<button onClick={() => router.push('tel:09378565090')}>
						<MdCall />
					</button>
					<button onClick={() => router.push('/')}>
						<BiInfoCircle />
						<p>راهنمای سفارش</p>
					</button>
					<button onClick={() => router.push('/services')}>
						<MdDesignServices />
						<p>خدمات</p>
					</button>
				</div>
			</>
		);
	};

	return (
		<>
			<div className={quickAccess ? 'footer' : 'footer big-gap'}>
				<div className='showcase'>
					{quickAccess ? <QuickAccess /> : <Mascot />}
				</div>
				<div className='general'>
					<div className='contact'>
						<div className='card'>
							<div>
								<BsEnvelopeAt />
								<p>ایمیل:</p>
								<p>info@billboardzarin.com</p>
							</div>
							<div>
								<FiPhoneCall />
								<p>تلفن:</p>
								<p>01154224371</p>
								<p>09118665090</p>
							</div>
							<div>
								<LiaMapMarkedAltSolid />
								<p>آدرس:</p>
								<p>تنکابن - خیابان جمهوری - کوچه شبرنگ</p>
							</div>
						</div>
					</div>
					<div className='info'>
						<div className='card'>
							<div className='relative'>
								<Image
									fill
									alt='logo footer'
									src='/img/logo.png'
									className='object-contain w-full'
								/>
							</div>
							<div>
								<div className='relative'>
									<Image
										alt='logo'
										fill
										className='object-contain'
										src='/img/mirace.png'
									/>
								</div>
								<div className='relative'>
									<Image
										alt='logo'
										fill
										className='object-contain'
										src='/img/rezi.webp'
									/>
								</div>
								<div className='relative'>
									<Image
										alt='logo'
										fill
										className='object-contain'
										src='/img/enamad.png'
									/>
								</div>
							</div>
							<div>
								<div className='text-white ps-4 text-xl flex items-center justify-start gap-2 bg-gradient-to-r from-purple-500 to-red-500'>
									<BiLogoInstagram />
									<Link href='https://www.instagram.com/bilbordzarin/'>
										ما را در اینستاگرام دنبال کنید.
									</Link>
								</div>
								<div className='text-white ps-4 text-xl flex items-center justify-start gap-2 bg-gradient-to-r from-blue-700 to-green-600'>
									<MdCall className='text-white' />
									<Link href='tel:09378565090'>
										شماره تماس: 09378565090
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<MobileFooter />
		</>
	);
};

export default Footer;
