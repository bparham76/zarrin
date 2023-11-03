'use client';
import dynamic from 'next/dynamic';
import './styles/cta.scss';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegMap } from 'react-icons/fa6';
import { BsAspectRatio } from 'react-icons/bs';
import { MdOutlineFitScreen } from 'react-icons/md';
import { AiOutlineCreditCard, AiOutlineClose } from 'react-icons/ai';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { IoLocationOutline } from 'react-icons/io5';
import { PiMoneyLight } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa';

const JDate = require('jalali-date');

const CTA = ({
	area,
	height,
	width,
	address,
	structureType,
	location,
	reserved,
	price,
}) => {
	let ltlng = location?.split(', ');
	const date = reserved
		? `رزرو شده تا ${new JDate(reserved.split('-')).format('YYYY/MM/DD')}`
		: 'قابل اکران';

	const Map = dynamic(() => import('./Map'), { ssr: false });

	return (
		<div className='cta-container'>
			<h4>
				<AiOutlineInfoCircle />
				درباره بیلبورد
			</h4>
			<div className='cta-card'>
				<div>
					<FaRegMap className='icon' />
					<div>
						<p>آدرس</p>
						<p>{address}</p>
					</div>
				</div>
				<div>
					<BsAspectRatio className='icon' />
					<div>
						<p>ابعاد</p>
						<p className='flex gap-1'>
							{width}
							<AiOutlineClose className='text-z-dark-blue' />
							{height}
						</p>
					</div>
				</div>
				<div>
					<MdOutlineFitScreen className='icon' />
					<div>
						<p>مساحت</p>
						<p>{area} متر مربع</p>
					</div>
				</div>
				<div>
					<AiOutlineCreditCard className='icon' />
					<div>
						<p>نوع سازه</p>
						<p>{structureType}</p>
					</div>
				</div>
				<div>
					<PiCalendarCheckLight className='icon' />
					<div>
						<p>وضعیت اکران</p>
						<p>{date}</p>
					</div>
				</div>
			</div>
			<div className='buy'>
				<div>
					<p>
						<PiMoneyLight />
						اجاره ماهیانه:
					</p>
					<p>{price ? `${price} تومان` : 'تماس بگیرید'}</p>
				</div>
				<button>
					<FaPhoneAlt />
					تماس با پشتیبانی
				</button>
			</div>
			<div className='location-board'>
				<h4>
					<IoLocationOutline />
					موقعیت مکانی
				</h4>
				<div className='map'>
					<Map center={ltlng} />
				</div>
			</div>
		</div>
	);
};

export default CTA;
