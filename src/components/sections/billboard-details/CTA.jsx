import './styles/cta.scss';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegMap } from 'react-icons/fa6';
import { BsAspectRatio } from 'react-icons/bs';
import { MdOutlineFitScreen } from 'react-icons/md';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { IoLocationOutline } from 'react-icons/io5';
import { PiMoneyLight } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa';

const CTA = () => {
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
						<p>
							مازندران، چالوس، نمک آبرود به هچیرود، رو به روی ...
						</p>
					</div>
				</div>
				<div>
					<BsAspectRatio className='icon' />
					<div>
						<p>ابعاد</p>
						<p>12X5</p>
					</div>
				</div>
				<div>
					<MdOutlineFitScreen className='icon' />
					<div>
						<p>مساحت</p>
						<p>60 متر مربع</p>
					</div>
				</div>
				<div>
					<AiOutlineCreditCard className='icon' />
					<div>
						<p>نوع سازه</p>
						<p>بیلبورد بین جاده ای</p>
					</div>
				</div>
				<div>
					<PiCalendarCheckLight className='icon' />
					<div>
						<p>وضعیت اکران</p>
						<p>رزرو شده</p>
					</div>
				</div>
			</div>
			<div className='buy'>
				<div>
					<p>
						<PiMoneyLight />
						اجاره ماهیانه:
					</p>
					<p>38.000.000 تومان</p>
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
				<div className='map'></div>
			</div>
		</div>
	);
};

export default CTA;
