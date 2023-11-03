'use client';
import './styles/billboardslider.scss';
import Slider from '@ant-design/react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { GrFormClose } from 'react-icons/gr';
import { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegMap } from 'react-icons/fa6';
import { BsAspectRatio } from 'react-icons/bs';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { useMobileScreen } from '../../hooks';
import Image from 'next/image';
import Link from 'next/link';
import { relativeToAbsoluteURL } from '@/utils/service';

const BillboardSlider = ({ data }) => {
	const SliderRef = useRef();

	const mobile = useMobileScreen();

	const LeftArrow = () => (
		<button
			className='control left'
			onClick={e => SliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);
	const RightArrow = () => (
		<button
			className='control right'
			onClick={e => SliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	const Item = ({ image, height, width, id, title, reserved, city }) => {
		return (
			<div className='slider-item'>
				<Link href={'/billboard/' + id}>
					<div className='card'>
						<div className='img-container'>
							<Image
								src={relativeToAbsoluteURL(image)}
								alt={title}
								fill
							/>
						</div>
						<div className='info'>
							<div className='caption'>
								<p>{title}</p>
								<p>
									<AiFillStar className='text-yellow-700' />
									3.5/5
								</p>
							</div>
							<div className='details'>
								<div>
									<p>
										<BsAspectRatio />
										{height}
										<GrFormClose />
										{width}
									</p>
								</div>
								<div>
									<p>
										<FaRegMap />
										{city}
									</p>
								</div>
								<div>
									<p>
										<PiCalendarCheckLight />
										{reserved ? 'رزرو شده' : 'قابل اکران'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	};

	return (
		<div className='slider-container'>
			<LeftArrow />
			<RightArrow />
			<div className='title'>
				<div>
					<p>بیلبورد های مشابه</p>
					<button>مشاهده همه</button>
				</div>
			</div>
			<Slider
				ref={SliderRef}
				centerMode={mobile}
				draggable
				swipe
				slidesToShow={mobile ? 1 : 4}
				slidesToScroll={1}
				rtl>
				{data?.map(item => (
					<Item
						id={item.id}
						key={item.id}
						image={item.image}
						height={item.height}
						width={item.width}
						title={item.title}
						city={item.city.label}
					/>
				))}
			</Slider>
		</div>
	);
};

export default BillboardSlider;
