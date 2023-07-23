import './styles/bluecontainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const BlueContainer = () => {
	const sliderRef = useRef();

	const LeftArrow = () => (
		<button
			className='left-arrow'
			onClick={(e) => sliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);

	const RightArrow = () => (
		<button
			className='right-arrow'
			onClick={(e) => sliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	const CarouselItem = ({ title }) => {
		return (
			<div className='mx-4 py-4'>
				<div className='carousel-item'>
					<div className='carousel-img'></div>
					<div className='carousel-data'>
						<div className='flex gap-2'>
							<p>{title}</p>
							<p>{title}</p>
						</div>
						<div>Stars</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='blue-container'>
			<div className='w-4/5 mx-auto flex flex-row relative'>
				<div className='topbanner left'></div>
				<div className='topbanner right'></div>
			</div>
			<div className='content-container'>
				<div className='title flex items-center justify-center'>
					<h2 className='text-5xl text-z-dark-blue'>شهرهای منتخب</h2>
				</div>
				<div className='carousel-container'>
					<Slider
						ref={sliderRef}
						arrows={false}
						rtl
						slidesToScroll={1}
						slidesToShow={4}
						speed={500}>
						{[...new Array(12)].map((item, index) => (
							<CarouselItem
								key={index}
								title={index}
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

export default BlueContainer;
