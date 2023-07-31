import './styles/billboardslider.scss';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegMap } from 'react-icons/fa6';
import { BsAspectRatio } from 'react-icons/bs';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { useMobileScreen } from '../../hooks';

const BillboardSlider = () => {
	const SliderRef = useRef();

	const mobile = useMobileScreen();

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

	const Item = () => {
		return (
			<div className='slider-item'>
				<div className='card'>
					<img
						src=''
						alt=''
					/>
					<div className='info'>
						<div className='caption'>
							<p>
								بیلبورد تبلیغاتی مقابل ایران تافته
								<AiFillStar className='text-yellow-700' />
								3.5/5
							</p>
						</div>
						<div className='details'>
							<div>
								<p>
									<BsAspectRatio />
									12X6
								</p>
							</div>
							<div>
								<p>
									<FaRegMap />
									چالوس
								</p>
							</div>
							<div>
								<p>
									<PiCalendarCheckLight />
									قابل اکران
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='slider-container'>
			<div className='title'>
				<div>
					<p>بیلبورد های مشابه</p>
					<button>مشاهده همه</button>
				</div>
			</div>
			<Slider
				ref={SliderRef}
				centerMode
				draggable
				swipe
				slidesToShow={mobile ? 1 : 4}
				slidesToScroll={1}
				rtl>
				{[...new Array(5)].map((item, index) => (
					<Item key={index} />
				))}
			</Slider>
		</div>
	);
};

export default BillboardSlider;
