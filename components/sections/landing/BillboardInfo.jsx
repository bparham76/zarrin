'use client';
import './styles/billboardinfo.scss';
import Slider from '@ant-design/react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { GoVerified } from 'react-icons/go';
import { MdPercent } from 'react-icons/md';
import { useRef } from 'react';

import { BillboardSliderItem } from '../../common';
import { useMobileScreen } from '../../../hooks';

const BillboardInfo = ({
	mostViewedBillboards = [],
	discountedBillboards = [],
}) => {
	const offeredSliderRed = useRef();
	const popularSliderRef = useRef();

	const mobile = useMobileScreen();

	const LeftArrow = ({ sliderRef }) => (
		<button
			className='carousel-control left'
			onClick={e => sliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);
	const RightArrow = ({ sliderRef }) => (
		<button
			className='carousel-control right'
			onClick={e => sliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	return (
		<>
			<div className='billboard-section higher'>
				<div className='data'>
					<div className='title red'>بیلبورد های تخفیف دار</div>
					<div className='title-m red'>
						<div className='icon'>
							<MdPercent />
						</div>
						<p>تخفیف دار ها</p>
						<button>مشاهده همه</button>
					</div>
					<div className='carousel-container'>
						<LeftArrow sliderRef={offeredSliderRed} />
						<RightArrow sliderRef={offeredSliderRed} />
						<Slider
							ref={offeredSliderRed}
							arrows={false}
							slidesToShow={mobile ? 1 : 4}
							slidesToScroll={1}
							centerMode={mobile}
							swipe
							draggable
							rtl>
							{discountedBillboards &&
								discountedBillboards?.map((item, index) => (
									<BillboardSliderItem
										data={item}
										key={index}
										offer
									/>
								))}
						</Slider>
						<div className='btn-container'>
							<button>
								مشاهده بیشتر <FaChevronLeft />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='billboard-section high'>
				<div className='data'>
					<div className='title blue'>بیلبورد های پر بازدید</div>
					<div className='title-m blue'>
						<div className='icon'>
							<GoVerified />
						</div>
						<p>پربازدیدها</p>
						<button>مشاهده همه</button>
					</div>
					<div className='carousel-container'>
						<LeftArrow sliderRef={popularSliderRef} />
						<RightArrow sliderRef={popularSliderRef} />
						<Slider
							ref={popularSliderRef}
							arrows={false}
							slidesToShow={mobile ? 1 : 4}
							slidesToScroll={1}
							centerMode={mobile}
							swipe
							draggable
							rtl>
							{mostViewedBillboards &&
								mostViewedBillboards?.map((item, index) => (
									<BillboardSliderItem
										data={item}
										key={index}
									/>
								))}
						</Slider>
						<div className='btn-container'>
							<button>
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
