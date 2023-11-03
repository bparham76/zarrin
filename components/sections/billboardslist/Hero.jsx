'use client';
import './styles/hero.scss';
import Slider from '@ant-design/react-slick';
import { BsStarFill } from 'react-icons/bs';
import { useMobileScreen } from '../../../hooks';
import { useRef, useState } from 'react';
import {
	FaChevronLeft,
	FaChevronRight,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const Hero = ({
	showByState = false,
	title = 'همه بیلبوردها',
	children,
	cities = [],
}) => {
	const router = useRouter();
	const mobile = useMobileScreen();
	const sliderRef = useRef();
	const [showFullDesc, setShowFullDesc] = useState(false);

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

	const CityItem = ({
		label = 'چالوس',
		name = 'chalus',
		itemCount = 2,
		id,
	}) => {
		return (
			<div
				className='item'
				onClick={() => router.push('/billboards?city__in=' + id)}>
				<div className='card'>
					<div className='image'></div>
					<div className='info'>
						<p>{label}</p>
						<div>
							<p>({itemCount} مورد)</p>
							<p>{label}</p>
						</div>
						<div>
							3/5
							<BsStarFill className='text-yellow-500' />
							<BsStarFill className='text-yellow-500' />
							<BsStarFill className='text-yellow-500' />
							<BsStarFill className='text-gray-500' />
							<BsStarFill className='text-gray-500' />
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='by-state-hero-container'>
			<div className='title'>
				<p>{title}</p>
			</div>
			{showByState && cities && (
				<div className='carousel'>
					<RightArrow />
					<LeftArrow />
					<Slider
						ref={sliderRef}
						arrows={false}
						swipe
						rtl
						draggable
						centerMode={mobile}
						slidesToShow={mobile ? 2 : 4}
						slidesToScroll={1}>
						{cities?.map(item => (
							<CityItem
								key={item.id}
								label={item.label}
								name={item.name}
								id={item.id}
							/>
						))}
					</Slider>
				</div>
			)}
			{children && (
				<div className='description'>
					<div className={showFullDesc ? 'context open' : 'context'}>
						{children}
					</div>
					<button
						onClick={e =>
							setShowFullDesc(showFullDesc => !showFullDesc)
						}>
						{showFullDesc ? (
							<>
								مشاهده کمتر
								<FaChevronUp />
							</>
						) : (
							<>
								مشاهده بیشتر
								<FaChevronDown />
							</>
						)}
					</button>
				</div>
			)}
		</div>
	);
};

export default Hero;
