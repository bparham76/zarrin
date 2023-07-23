import '../styles/podcastenteries.scss';
import { HiOutlinePlay } from 'react-icons/hi';

const PodcastEnteries = () => {
	const PodcastEntery = () => {
		return (
			<div className='entery'>
				<div className='caption'>
					<h4>عنوان پادکست</h4>
					<p>نام گوینده</p>
				</div>
				<div className='img'>
					<HiOutlinePlay className='play-icon' />
				</div>
			</div>
		);
	};

	return (
		<div className='podcast-container'>
			<div className='items-container'>
				<div className='title'>
					<p className='heading'>پادکست ها</p>
				</div>
				<div className='sections'>
					<div className='list'>
						{[...new Array(5)].map((item, index) => (
							<PodcastEntery />
						))}
					</div>
					<div className='canvas'></div>
				</div>
			</div>
		</div>
	);
};

export default PodcastEnteries;
