import './styles/description.scss';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { BiMessageRounded } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { CommentsForm } from '../../common';
import Slider from 'react-slick';
import { useMobileScreen } from '../../../hooks';
import { useRef } from 'react';

const Description = () => {
	const mobile = useMobileScreen();

	const SliderRef = useRef();

	const LeftArrow = () => (
		<button
			className='control left'
			onClick={(e) => SliderRef?.current?.slickNext()}>
			<FaChevronLeft />
		</button>
	);
	const RightArrow = () => (
		<button
			className='control right'
			onClick={(e) => SliderRef?.current?.slickPrev()}>
			<FaChevronRight />
		</button>
	);

	const CommentItem = () => {
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
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Dolorem illo architecto minus reiciendis, quae quis sapiente
				facilis temporibus harum aut porro vero asperiores? Ab, debitis
				aspernatur impedit vel ratione error?Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Dolorem illo architecto minus
				reiciendis, quae quis sapiente facilis temporibus harum aut
				porro vero asperiores? Ab, debitis aspernatur impedit vel
				ratione error?Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Dolorem illo architecto minus reiciendis, quae
				quis sapiente facilis temporibus harum aut porro vero
				asperiores? Ab, debitis aspernatur impedit vel ratione
				error?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Dolorem illo architecto minus reiciendis, quae quis sapiente
				facilis temporibus harum aut porro vero asperiores? Ab, debitis
				aspernatur impedit vel ratione error?Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Dolorem illo architecto minus
				reiciendis, quae quis sapiente facilis temporibus harum aut
				porro vero asperiores? Ab, debitis aspernatur impedit vel
				ratione error?Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Dolorem illo architecto minus reiciendis, quae
				quis sapiente facilis temporibus harum aut porro vero
				asperiores? Ab, debitis aspernatur impedit vel ratione
				error?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Dolorem illo architecto minus reiciendis, quae quis sapiente
				facilis temporibus harum aut porro vero asperiores? Ab, debitis
				aspernatur impedit vel ratione error?
			</p>
			<div className='btn-container'>
				<button>
					مشاهده بیشتر
					<FaChevronLeft />
				</button>
			</div>

			<div className='comments-container'>
				<div className='slider-header'>
					<BiMessageRounded className='icon' />
					<p>نظرات کاربران:</p>
				</div>
				<div className='comments-slider'>
					<Slider
						ref={SliderRef}
						slidesToShow={mobile ? 1 : 2}
						rtl
						centerMode={mobile}
						swipe
						draggable>
						{[...new Array(5)].map((item, index) => (
							<CommentItem key={index} />
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
			</div>
			<CommentsForm />
		</div>
	);
};

export default Description;
