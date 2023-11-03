'use client';
import './styles/billboardslideritem.scss';
import { FaRegMap } from 'react-icons/fa6';
import { GrFormClose } from 'react-icons/gr';
import { BsAspectRatio } from 'react-icons/bs';
import { PiCalendarCheckBold } from 'react-icons/pi';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { relativeToAbsoluteURL } from '@/utils/service';

// const JDate = require('jalali-date');

const BillboardSliderItem = ({
	data = {
		id: 1,
		title: '',
		image: '',
		height: 0,
		width: 0,
		city: { id: 0, label: '', name: '' },
	},
}) => {
	// const router = useRouter();
	const date = data.reserved
		? 'رزرو شده' //new JDate(new Date(data.reserved)).format('DD MM YYYY')
		: 'قابل اکران';

	return (
		<Link href={'/billboard/' + data.id}>
			<div
				className='carousel-item'
				// onClick={() => router.push('/billboard/' + data.id)}
			>
				{data.discount_percent ? (
					<div className='off-percent'>{data.discount_percent}%</div>
				) : (
					<div className='check-badge'>
						<HiOutlineBadgeCheck />
					</div>
				)}
				<div className='carousel-content text-z-dark-blue'>
					<div className='img'>
						<Image
							className='object-cover'
							src={relativeToAbsoluteURL(data.image)}
							alt={data.id}
							fill
						/>
					</div>
					<p className='text-md line-clamp-1'>{data.title}</p>
					<div className='info'>
						<p>
							{date}
							<PiCalendarCheckBold />
						</p>
						<p>
							{data.height}
							<GrFormClose />
							{data.width}
							<BsAspectRatio />
						</p>
						<p>
							{data.city.label}
							<FaRegMap />
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BillboardSliderItem;
