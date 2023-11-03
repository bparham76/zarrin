'use client';
import '../../styles/advcamps.scss';
import { Header, Footer } from '../sections';
import { FaChevronDown } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const AdvCamps = () => {
	const router = useRouter();

	const campData = [
		{
			title: 'کمپین تبلیغاتی الو مرغ',
			abstract:
				'استارت آپ الو مرغ یک کسب و کار مبتنی بر توزیع محصولات پروتئینی از جملع مرغ و کالباس هست که اخیرا در شهرستان تنکابن',
		},
		{
			title: 'کمپین تبلیغاتی هلدینگ املاک مهدوی',
			abstract: '',
		},
		{
			title: '',
			abstract: '',
		},
		{
			title: '',
			abstract: '',
		},
		{
			title: '',
			abstract: '',
		},
		{
			title: '',
			abstract: '',
		},
	];

	const AdvItem = (data = { id: 1 }) => (
		<div className='adv-item'>
			<div className='picture'></div>
			<div className='content'>
				<h4>عنوان کمپ تبلیغاتی</h4>
				<p>توضیحات کمپ تبلیغاتی</p>
				<button onClick={() => router.push('/campaigns/' + data.id)}>
					مشاهده جزئیات کمپین
				</button>
			</div>
		</div>
	);

	return (
		<>
			<Header />
			<div className='adv-container'>
				<div className='hero'>
					<div className='banner'></div>
				</div>
				<h2>کمپین های تبلیغاتی:</h2>
				<div className='adv-items'>
					{[...new Array(8)].map((item, index) => (
						<AdvItem key={index} />
					))}
				</div>
				<button>
					نمایش بیشتر
					<FaChevronDown />
				</button>
			</div>
			<Footer quickAccess />
		</>
	);
};

export default AdvCamps;
