import './styles/footer.scss';
import Zarin from '../../resources/img/reza zarin 02.png';
import { BsEnvelopeAt } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';

const Footer = () => {
	const Chip = () => {
		return <div className='chip'>نوشته</div>;
	};
	return (
		<div className='footer'>
			<div className='top text-white'>
				<div className='container flex'>
					<div className='img'>
						<img src={Zarin} />
					</div>
					<div className='context'>
						<h2>رضا زرین</h2>
						<p>
							رضا زرین کار خود را در زمینه بیلبوردهای تبلیغاتی در
							سال 1393 شروع کرد و در این سال ها به دلیل قیمت مناسب
							و خدمات متفاوت در طراحی و کیفیت چاپ و همپنین سرعت در
							اجرای بیلبورد توانسته جایگاه ارزنده ای را در میان
							رقبای خود کسب کند.
						</p>
					</div>
				</div>
			</div>
			<div className='bottom text-z-dark-blue'>
				<div className='container flex flex-col'>
					<div className='info-top'>
						<div className='part'>
							<div className='flex gap-2'>
								<BsEnvelopeAt className='text-xl' />
								ایمیل
							</div>
							<p>info@billboardzarin.com</p>
						</div>
						<div className='part border-x-2 border-gray-300'>
							<div className='flex gap-2'>
								<FiPhoneCall className='text-xl' />
								تلفن
							</div>
							<p>01154224371</p>
							<p>09118665090</p>
						</div>
						<div className='part'>
							<div className='flex gap-2'>
								<LiaMapMarkedAltSolid className='text-2xl' />
								آدرس
							</div>
							<p>تنکابن - خیابان جمهوری - کوچه شبرنگ</p>
						</div>
					</div>
					<div className='info-bottom'>
						<div className='part chips'>
							{[...new Array(12)].map((item, index) => (
								<Chip key={index} />
							))}
						</div>
						<div className='part'>salam</div>
						<div className='part'>salam</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
