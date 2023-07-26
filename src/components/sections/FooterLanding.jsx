import './styles/footer-landing.scss';
import RZ from '../../resources/img/reza zarin 02.png';
import { BsEnvelopeAt } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';

const FooterLanding = () => {
	return (
		<div className='footer'>
			<div className='top'>
				<div className='image'>
					<img src={RZ} />
				</div>
				<div className='description'>
					<h4>رضا زرین</h4>
					<p>
						رضا زرین کار خود را در زمینه بیلبوردهای تبلیغاتی در سال
						1393 شروع کرد و در این سال ها به دلیل قیمت مناسب و خدمات
						متفاوت در طراحی و کیفیت چاپ و همپنین سرعت در اجرای
						بیلبورد توانسته جایگاه ارزنده ای را در میان رقبای خود
						کسب کند.
					</p>
				</div>
			</div>
			<div className='bottom'>
				<div>
					<div>
						<div>
							<BsEnvelopeAt className='text-xl' />
							<p>ایمیل</p>
						</div>
						<p>info@billboardzarin.com</p>
					</div>
					<div>
						<div>
							<FiPhoneCall className='text-xl' />
							<p>تلفن</p>
						</div>
						<p>01154224371</p>
						<p>09118665090</p>
					</div>
					<div>
						<div>
							<LiaMapMarkedAltSolid className='text-2xl' />
							<p>آدرس</p>
						</div>
						<p>تنکابن - خیابان جمهوری - کوچه شبرنگ</p>
					</div>
					<div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
						<div>برچسب</div>
					</div>
					<div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterLanding;
