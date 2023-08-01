import './styles/gallery.scss';
import { FcLike } from 'react-icons/fc';
import { BsShare } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import Slider from 'react-slick';

const Gallery = () => {
	const ImageItem = () => {
		return (
			<div className='image-item'>
				<img src='' />
			</div>
		);
	};
	return (
		<div className='gallery-container'>
			<div className='image'>
				<div className='buttons'>
					<button>
						<FcLike />
					</button>
					<button>
						<BsShare />
					</button>
				</div>
			</div>
			<div className='image-gallery'>
				<Slider
					rtl
					swipe
					draggable
					slidesToShow={4}
					slidesToScroll={1}>
					{[...new Array(8)].map((item, index) => (
						<ImageItem key={index} />
					))}
				</Slider>
			</div>
			<div className='info'>
				<h4>تابلو تبلیغاتی مقابل رستوران خلج در رامسر</h4>
				<div>
					<p>شناسه: 41556</p>
					<p>
						<AiFillStar className='text-yellow-700' />
						3.5/5
					</p>
				</div>
				<p>
					<IoLocationOutline /> مازندران
				</p>
				<p>
					<IoLocationOutline /> رامسر
				</p>
			</div>
		</div>
	);
};

export default Gallery;
