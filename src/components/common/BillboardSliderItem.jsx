import './styles/billboardslideritem.scss';

import { FaRegMap } from 'react-icons/fa6';
import { BsAspectRatio } from 'react-icons/bs';
import { PiCalendarCheckBold } from 'react-icons/pi';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

import { useState } from 'react';

const BillboardSliderItem = ({ offer = false, size, title, location }) => {
	const [hover, isHover] = useState(false);

	return (
		<div
			className='carousel-item'
			onMouseEnter={(e) => isHover(true)}
			onMouseLeave={(e) => isHover(false)}>
			{offer ? (
				<div className='off-percent'>20%</div>
			) : (
				<div className='check-badge'>
					<HiOutlineBadgeCheck />
				</div>
			)}
			<div className='carousel-content'>
				<div className={'img' + (hover ? ' hover' : '')}></div>
				<p className='text-md'>{title}</p>
				<div className='info'>
					<p>
						قابل اکران
						<PiCalendarCheckBold />
					</p>
					<p>
						{size}
						<BsAspectRatio />
					</p>
					<p>
						{location}
						<FaRegMap />
					</p>
				</div>
			</div>
		</div>
	);
};

export default BillboardSliderItem;
