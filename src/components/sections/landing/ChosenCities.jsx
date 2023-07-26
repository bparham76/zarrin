import '../styles/chosencities.scss';
import Slider from 'react-slick';
import { useRef, useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { useMobileScreen } from '../../../hooks';

const ChosenCities = () => {
	const sliderRef = useRef();
	const mobile = useMobileScreen();

	const LeftArrow = () => (
		<button
			className='left arrow'
			onClick={(e) => sliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);

	const RightArrow = () => (
		<button
			className='right arrow'
			onClick={(e) => sliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	const CarouselItem = ({ title }) => {
		const [hover, isHover] = useState(false);
		return (
			<div
				className='bounds'
				onMouseEnter={(e) => isHover(true)}
				onMouseLeave={(e) => isHover(false)}>
				<div className='carousel-item'>
					<div className={'img' + (hover ? ' hover' : '')}></div>
					<div className='data'>
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

export default ChosenCities;
