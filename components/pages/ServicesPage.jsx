'use client';
import '../../styles/servicespage.scss';
import { Header, Footer } from '../sections';

const ServicesPage = () => {
	const ServiceItem = ({ data }) => (
		<div className='service-item'>
			<div className='picture'></div>
			<div className='content'>
				<h4 dangerouslySetInnerHTML={{ __html: data.title }}></h4>
				{/* <h4>{data.title}</h4> */}
				<p>{data.context}</p>
				<button>مشاهده نمونه کار ها</button>
			</div>
		</div>
	);

	const SelectorItem = ({ title }) => (
		<div className='selector-item'>
			<div className='annotation'></div>
			<p>{title}</p>
		</div>
	);

	const selectors = [
		{ title: 'بیلبورد', filter: 0 },
		{ title: 'اینستاگرام', filter: 1 },
		{ title: 'عکاسی', filter: 2 },
		{ title: 'بسته بندی', filter: 3 },
		{ title: 'هویت بصری', filter: 4 },
		{ title: 'هدایای تبلیغاتی', filter: 5 },
	];

	const contents = [
		{
			title: 'طراحی و اجرای بیلبوردهای <br/> تبلیغاتی در شمال کشور',
			context: 'بزرگترین مرجع اجاره بی واسطه بیلبورد',
		},
		{
			title: 'مدیریت پیج اینستاگرام <br/> شرکت ها و کارخانه ها',
			context: 'طراحی اختصاصی پست و استوری',
		},
		{
			title: 'عکاسی صنعتی از محصول <br/> فیلم برداری و ساخت تیزر',
			context: 'فیلم برداری و تدوین تیزر و انیمیشن',
		},
		{
			title: 'طراحی اختصاصی بسته <br/> بندی و باکس محصول',
			context: 'طراحی بسته بندی اختصاصی محصول',
		},
		{
			title: 'طراحی تخصصی لوگو و <br/> هویت بصری برند',
			context: 'طراحی تخصصی لوگو و هویت بصری',
		},
		{
			title: 'طراحی و تولید انواع <br/> هدیه های تبلیغاتی',
			context: 'انواع هدایای تبلیغاتی برای مشتریان',
		},
	];

	return (
		<>
			<Header />
			<div className='services-container'>
				<div className='services-hero'>
					<div className='banner'></div>
				</div>
				<div className='content-selector'>
					<h2>خدمات:</h2>
					<div className='items'>
						{selectors.map(item => (
							<SelectorItem
								key={item.filter}
								title={item.title}
							/>
						))}
					</div>
				</div>
				<div className='services-content'>
					{contents.map((item, index) => (
						<ServiceItem
							key={index}
							data={item}
						/>
					))}
				</div>
			</div>
			<Footer quickAccess />
		</>
	);
};

export default ServicesPage;
