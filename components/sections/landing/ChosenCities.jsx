'use client';
import './styles/chosencities.scss';
import Slider from '@ant-design/react-slick';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { useMobileScreen } from '../../../hooks';

const ChosenCities = ({ data = [] }) => {
	const sliderRef = useRef();
	const mobile = useMobileScreen();

	const LeftArrow = () => (
		<button
			className='left arrow'
			onClick={e => sliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);

	const RightArrow = () => (
		<button
			className='right arrow'
			onClick={e => sliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	const CarouselItem = ({ label, name }) => {
		return (
			<Link href={'/billboards/' + name}>
				<div className='bounds'>
					<div className='carousel-item'>
						<div className='img'>
							<div className='relative w-full h-full'>
								<Image
									src=''
									alt=''
									fill
								/>
							</div>
						</div>
						<div className='data'>
							<div className='flex gap-2'>
								<p>{label}</p>
								<p>{label}</p>
							</div>
							<div>Stars</div>
						</div>
					</div>
				</div>
			</Link>
		);
	};

	return (
		<div className='blue-container'>
			<div className='banner-container'>
				<div className='topbanner left'></div>
				<div className='topbanner right'></div>
			</div>
			<div className='content-container'>
				<div className='title'>
					<h2>شهرهای منتخب</h2>
				</div>
				<div className='carousel-container'>
					<Slider
						ref={sliderRef}
						arrows={false}
						rtl
						slidesToScroll={1}
						slidesToShow={mobile ? 2 : 4}
						swipe
						draggable
						centerMode={mobile}
						speed={500}>
						{data?.map((item, index) => (
							<CarouselItem
								key={index}
								label={item.label}
								name={item.name}
							/>
						))}
					</Slider>
					<RightArrow />
					<LeftArrow />
				</div>
			</div>
		</div>
	);
};

export default ChosenCities;
