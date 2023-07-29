import './styles/podcastenteries.scss';
import { HiOutlinePlay } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsShare, BsPlay } from 'react-icons/bs';
import Slider from 'react-slick';
import { useMobileScreen } from '../../../hooks';

const PodcastEnteries = () => {
	const mobile = useMobileScreen();

	const PodcastEntery = () => {
		return (
			<div className='space'>
				<div className='entery'>
					<div className='caption'>
						<h4>عنوان پادکست</h4>
						<p>نام گوینده</p>
					</div>
					<div className='img'>
						<HiOutlinePlay className='play-icon' />
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='podcast-container'>
			<div className='items-container'>
				<div className='title'>
					<p>پادکست ها</p>
				</div>
				<div className='sections'>
					<div className='list'>
						<Slider
							verticalSwiping={!mobile}
							vertical={!mobile}
							slidesToScroll={1}
							slidesPerRow={mobile ? 1 : 4}
							arrows={false}
							centerMode
							dots={false}>
							{[...new Array(10)].map((item, index) => (
								<PodcastEntery key={index} />
							))}
						</Slider>
					</div>
					<div className='canvas'>
						<div className='info'>
							<div className='caption'>
								<h4>عنوان پادکست</h4>
								<div className='inline-info'>
									<RiAccountCircleLine />
									<p>گوینده پادکست</p>
								</div>
								<div className='summary'>
									لورم ایپسوم متن ساختگی با تولید سادگی
									نامفهوم از صنعت چاپ و با استفاده از طراحان
									گرافیک است. چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است و برای
									شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
									متنوع با هدف بهبود ابزارهای کاربردی می باشد.
								</div>
								<div className='controls'>
									<button className='btn red'>
										<AiFillHeart />
									</button>
									<button className='btn'>
										<BsShare />
									</button>
									<div className='btn play'>
										33,267
										<BsPlay />
									</div>
								</div>
							</div>
							<div className='img'></div>
						</div>
						<div className='control'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastEnteries;
