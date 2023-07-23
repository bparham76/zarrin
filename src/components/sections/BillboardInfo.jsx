import './styles/billboardinfo.scss';
import Slider from 'react-slick';

const BillboardInfo = () => {
	const OfferedSlide = () => {
		return (
			<div className='carousel-item'>
				<div className='carousel-content'>
					<div className='img'>img</div>
					<p className='text-md'>
						بیلبورد تبلیغاتی مقابل ایران تافته
					</p>
					<div className='info'>salam</div>
				</div>
			</div>
		);
	};

	const PopularSlide = () => {
		return <div>salam</div>;
	};

	return (
		<>
			<div className='billboard-section'>
				<div className='data'>
					<div className='title red'>بیلبورد های تخفیف دار</div>
					<div className='w-3/4 pb-4'>
						<Slider
							arrows={false}
							slidesToShow={4}
							slidesToScroll={1}
							rtl>
							{[...new Array(10)].map((item, index) => (
								<OfferedSlide key={index} />
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className='billboard-section'>
				<div className='data'>
					<div className='title blue'>بیلبورد های پر بازدید</div>
					<div className='w-3/4 mx-auto'>
						<Slider
							arrows={false}
							slidesToShow={4}
							slidesToScroll={1}
							rtl>
							{[...new Array(10)].map((item, index) => (
								<OfferedSlide key={index} />
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillboardInfo;
