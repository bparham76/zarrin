'use client';
import './styles/gallery.scss';
// import { FcLike } from 'react-icons/fc';
// import { BsShare } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
// import Slider from '@ant-design/react-slick';
import Image from 'next/image';
import { relativeToAbsoluteURL } from '@/utils/service';

const Gallery = ({ data }) => {
	const ImageItem = ({ img }) => {
		return (
			<div className='image-item'>
				<div>
					{img != 'none' && (
						<Image
							src={relativeToAbsoluteURL(img)}
							alt=''
							fill
							className='object-cover'
						/>
					)}
				</div>
			</div>
		);
	};

	const SliderSection = () => {
		// let items = data?.gallery;

		// window?.alert('length: ' + item.length);

		// if (items.length < 4)
		// 	for (let i = 0; i < 4 - items.length; i++) {
		// 		items.push({ image: 'none', _id: i });
		// 		alert(i);
		// 	}

		// return (
		// 	<>
		// 		{items.map((item, index) => (
		// 			<ImageItem
		// 				key={index}
		// 				img={item.image}
		// 			/>
		// 		))}
		// 	</>
		// );
		return null;
	};

	return (
		<div className='gallery-container'>
			<div className='image'>
				<Image
					src={relativeToAbsoluteURL(data?.image)}
					alt=''
					fill
					className='object-cover'
				/>
				{/* <div className='buttons'>
					<button>
						<FcLike />
					</button>
					<button>
						<BsShare />
					</button>
				</div> */}
			</div>
			<div className='image-gallery'>
				{/* <Slider
					rtl
					swipe
					draggable
					slidesToShow={4}
					slidesPerRow={4}
					slidesToScroll={1}>
					{data?.gallery?.map((item, index) => (
						<ImageItem
							key={index}
							img={item.image}
						/>
					))}
					<SliderSection />
				</Slider> */}
			</div>
			<div className='info'>
				<h4>{data?.title}</h4>
				<p>شناسه: {data?.id}</p>
				<p>
					<IoLocationOutline /> مازندران
				</p>
				<p>
					<IoLocationOutline /> {data?.city?.label}
				</p>
				<p>
					<AiFillStar className='text-yellow-700' />
					3.5/5
				</p>
			</div>
		</div>
	);
};

export default Gallery;
