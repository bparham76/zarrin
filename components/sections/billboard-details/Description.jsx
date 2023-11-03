'use client';
import './styles/description.scss';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { BiMessageRounded } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BsShare, BsStar, BsStarFill } from 'react-icons/bs';
import {
	FaChevronLeft,
	FaChevronRight,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa6';
import { CommentsForm } from '../../common';
import Slider from '@ant-design/react-slick';
import { useMobileScreen } from '../../../hooks';
import { useRef, useState } from 'react';

const Description = ({ data, commentsData, bid }) => {
	const [showFullContext, setShowFullContext] = useState(false);

	const mobile = useMobileScreen();

	const SliderRef = useRef();

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

	const handleShare = () =>
		navigator.clipboard.writeText(
			'https://billboardzarin.com/billboard/' + bid
		);

	const CommentItem = ({ data }) => {
		return (
			<div className='comment-item'>
				<div className='comment-body'>
					<div>
						<div className='img'></div>
						<div className='ids'>
							<p>محمد موفقی</p>
							<p>اردیبهشت 28</p>
						</div>
						<div className='rating'>
							<p>
								<AiFillStar className='text-yellow-700' />
								3.5/5
							</p>
						</div>
					</div>
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Eveniet nulla quam consequuntur assumenda
						voluptate, doloribus ex unde!
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='description-container'>
			<p>
				<HiMiniBars3BottomRight className='icon' />
				توضیحات:
			</p>
			<div
				className={showFullContext ? 'context full' : 'context'}
				dangerouslySetInnerHTML={{ __html: data }}></div>
			<div className='btn-container'>
				<button
					onClick={() =>
						setShowFullContext(showFullContext => !showFullContext)
					}>
					{!showFullContext ? (
						<>
							مشاهده بیشتر
							<FaChevronDown />
						</>
					) : (
						<>
							مشاهده کمتر
							<FaChevronUp />
						</>
					)}
				</button>
			</div>

			<div className='sharing'>
				<button onClick={handleShare}>
					<BsShare />
				</button>
				<div>
					<p>به این بیلبورد امتیاز دهید</p>
					{[...new Array(2)].map((item, index) => (
						<BsStar key={index} />
					))}
					{[...new Array(3)].map((item, index) => (
						<BsStarFill
							className='text-yellow-700'
							key={index}
						/>
					))}
				</div>
			</div>
			<div className='comments-container'>
				<div className='slider-header'>
					<BiMessageRounded className='icon' />
					<p>نظرات کاربران:</p>
				</div>
				{commentsData ? (
					<>
						<div className='comments-slider'>
							<Slider
								ref={SliderRef}
								slidesToShow={mobile ? 1 : 2}
								rtl
								centerMode={mobile}
								swipe
								draggable>
								{commentsData?.map((item, index) => (
									<CommentItem
										key={index}
										data={item}
									/>
								))}
							</Slider>
						</div>
						<div className='slider-control'>
							<LeftArrow />
							<RightArrow />
						</div>
						<div className='btn-container'>
							<button>
								همه نظرات <FaChevronLeft />
							</button>
						</div>
					</>
				) : (
					<div className='no-comments'>
						موردی برای نمایش وجود ندارد.
					</div>
				)}
			</div>
			<CommentsForm />
		</div>
	);
};

export default Description;
