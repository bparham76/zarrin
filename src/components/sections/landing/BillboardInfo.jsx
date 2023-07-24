import '../styles/billboardinfo.scss';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useRef, useLayoutEffect, useState } from 'react';

import { BillboardSliderItem } from '../../common';

const BillboardInfo = () => {
	const offeredSliderRed = useRef();
	const popularSliderRef = useRef();

	const [mobile, isMobile] = useState(false);

	useLayoutEffect(() => {
		const detectMobile = () => {
			if (window.innerWidth > 470) isMobile(false);
			else isMobile(true);
		};
		window.addEventListener('resize', detectMobile);
		detectMobile();
		return () => window.removeEventListener('resize', detectMobile);
	}, []);

	const LeftArrow = ({ sliderRef }) => (
		<button
			className='carousel-control left'
			onClick={(e) => sliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);
	const RightArrow = ({ sliderRef }) => (
		<button
			className='carousel-control right'
			onClick={(e) => sliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	return (
		<>
			<div className='billboard-section higher'>
				<div className='data'>
					<div className='title red'>بیلبورد های تخفیف دار</div>
					<div className='w-3/4 pb-4 relative'>
						<LeftArrow sliderRef={offeredSliderRed} />
						<RightArrow sliderRef={offeredSliderRed} />
						<Slider
							ref={offeredSliderRed}
							arrows={false}
							slidesToShow={mobile ? 1 : 4}
							slidesToScroll={1}
							rtl>
							{[...new Array(10)].map((item, index) => (
								<BillboardSliderItem
									key={index}
									offer
									title='بیلبورد تبلیغاتی مقابل ایران تافته'
									location='چالوس'
									size='12X6'
								/>
							))}
						</Slider>
						<div className='btn-container'>
							<button className='btn-more'>
								مشاهده بیشتر <FaChevronLeft />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='billboard-section high'>
				<div className='data'>
					<div className='title blue'>بیلبورد های پر بازدید</div>
					<div className='w-3/4 mx-auto relative'>
						<LeftArrow sliderRef={popularSliderRef} />
						<RightArrow sliderRef={popularSliderRef} />
						<Slider
							ref={popularSliderRef}
							arrows={false}
							slidesToShow={mobile ? 1 : 4}
							slidesToScroll={1}
							rtl>
							{[...new Array(10)].map((item, index) => (
								<BillboardSliderItem
									key={index}
									title='بیلبورد تبلیغاتی مقابل ایران تافته'
									location='چالوس'
									size='12X6'
								/>
							))}
						</Slider>
						<div className='btn-container'>
							<button className='btn-more'>
								مشاهده بیشتر <FaChevronLeft />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillboardInfo;
