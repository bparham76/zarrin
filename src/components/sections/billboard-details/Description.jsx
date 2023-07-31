import './styles/description.scss';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { FaChevronLeft } from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';

const Description = () => {
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
						voluptate, doloribus ex unde! Cumque iste, voluptatum
						sed odit deserunt velit earum necessitatibus sapiente
						fugit deleniti amet!
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
						rtl
						swipe
						draggable>
						{[...new Array(5)].map((item, index) => (
							<CommentItem key={index} />
						))}
					</Slider>
				</div>
				<div className='btn-container'>
					<button>
						همه نظرات <FaChevronLeft />
					</button>
				</div>
			</div>
			<div className='similar-billboards'>
				<Slider
					rtl
					swipe
					draggable>
					{[...new Array(5)].map((item, index) => (
						<CommentItem key={index} />
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Description;
