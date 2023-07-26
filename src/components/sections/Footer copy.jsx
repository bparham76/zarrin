import './styles/footer.scss';
import Zarin from '../../resources/img/reza zarin 02.png';
import { BsEnvelopeAt } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';

const Footer = () => {
	const Chip = () => {
		return (
			<div className='chip'>
				<p>برچسب</p>
			</div>
		);
	};
	return (
		<div className='footer'>
			<div className='top text-white'>
				<div className='container up'>
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
				<div className='container down'>
					<div className='info-top'>
						<div className='part'>
							<div>
								<BsEnvelopeAt className='text-xl' />
								<p>ایمیل</p>
							</div>
							<p>info@billboardzarin.com</p>
						</div>
						<div className='part '>
							<div>
								<FiPhoneCall className='text-xl' />
								<p>تلفن</p>
							</div>
							<p>01154224371</p>
							<p>09118665090</p>
						</div>
						<div className='part'>
							<div>
								<LiaMapMarkedAltSolid className='text-2xl' />
								<p>آدرس</p>
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
						<div className='part'>
							<div className='badge'></div>
							<div className='badge'></div>
							<div className='badge'></div>
						</div>
						<div className='part col'>
							<div className='banner'></div>
							<div className='banner'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
