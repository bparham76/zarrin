'use client';
import './styles/pageselector.scss';
import DarkCrown from '../../../public/svg/crowndark.svg';
import LightCrown from '../../../public/svg/crownlight.svg';
import Image from 'next/image';

const PageSelector = ({ isWeblog = true, setIsWeblog = () => {} }) => {
	return (
		<div className={isWeblog ? 'page-title dark' : 'page-title light'}>
			<button
				className='left'
				onClick={() => setIsWeblog(false)}>
				اخبار و رویدادها
			</button>
			<button
				className='right'
				onClick={() => setIsWeblog(true)}>
				مجله و مقالات
			</button>
			<div className='crown light relative'>
				<Image
					src={LightCrown}
					alt=''
					className='object-cover'
					style={{ width: '100%' }}
				/>
			</div>
			<div className='crown dark relative'>
				<Image
					src={DarkCrown}
					alt=''
					className='object-cover'
					style={{ width: '100%' }}
				/>
			</div>
		</div>
	);
};

export default PageSelector;
