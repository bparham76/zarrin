import './styles/gallery.scss';
import { FcLike } from 'react-icons/fc';
import { BsShare } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const Gallery = () => {
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
			<div className='info'>
				<h4>تابلو تبلیغاتی مقابل رستوران خلج در رامسر</h4>
				<div>
					<p>شناسه: 41556</p>
					<p>
						<AiFillStar className='text-yellow-700' />
						3.5/5
					</p>
				</div>
				<p>hello</p>
				<p>hello</p>
				<p>hello</p>
			</div>
		</div>
	);
};

export default Gallery;
