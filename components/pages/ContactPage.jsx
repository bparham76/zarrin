'use client';
import '../../styles/contactpage.scss';
import { Header, Footer } from '../sections';
import RZ from '../../public/img/reza zarin 02.png';
import RZBig from '../../public/img/reza zarin 01.png';
import TextLogo from '../../public/img/logo text.png';
import Fly from '../../public/img/fly.png';
import Image from 'next/image';
import { useReducer, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ContactPage = () => {
	const [contactFormData, contactFormDispatch] = useReducer(
		contactDataReducer,
		{
			name: '',
			phone: '',
			business: '',
			subject: '',
			context: '',
		}
	);

	const [email, setEmail] = useState('');

	const [sendContact, setSendContact] = useState(false);
	const [sendEmail, setSendEmail] = useState(false);

	useEffect(() => {
		if (!sendContact) return;
		setSendContact(false);
		Swal.fire({
			text: 'پیام شما با موفقیت دریافت شد.',
			icon: 'success',
			confirmButtonText: 'تایید',
		});
		contactFormDispatch({ type: 'clear' });
	}, [sendContact]);

	useEffect(() => {
		if (!sendEmail) return;
		setSendEmail(false);
		Swal.fire({
			text: 'ایمیل شما با موفقیت در سرویس خبرنامه ثبت گردید.',
			icon: 'success',
			confirmButtonText: 'تایید',
		});
		setEmail('');
	}, [sendEmail]);

	return (
		<>
			<Header />
			<div className='contact-container'>
				<div className='contact-form'>
					<h4>راه های ارتباط با آژانس تبلیغاتی زرین</h4>
					<p>فرم ارتباط، آدرس و شماره تلفن</p>
					<input
						type='text'
						value={contactFormData.name}
						onChange={e =>
							contactFormDispatch({
								type: 'name',
								payload: e.target.value,
							})
						}
						placeholder='نام و نام خانوادگی'
					/>
					<input
						type='text'
						value={contactFormData.phone}
						onChange={e =>
							contactFormDispatch({
								type: 'phone',
								payload: e.target.value,
							})
						}
						placeholder='شماره تماس'
					/>
					<input
						type='text'
						value={contactFormData.business}
						onChange={e =>
							contactFormDispatch({
								type: 'business',
								payload: e.target.value,
							})
						}
						placeholder='حوزه کسب و کار'
					/>
					<input
						type='text'
						value={contactFormData.subject}
						onChange={e =>
							contactFormDispatch({
								type: 'subject',
								payload: e.target.value,
							})
						}
						placeholder='موضوع پیام'
					/>
					<textarea
						value={contactFormData.context}
						onChange={e =>
							contactFormDispatch({
								type: 'context',
								payload: e.target.value,
							})
						}
						placeholder='متن پیام'
						cols='30'
						rows='15'></textarea>
					<button
						onClick={e => setSendContact(true)}
						disabled={
							contactFormData.name.length == 0 ||
							contactFormData.phone.length < 11 ||
							contactFormData.business.length == 0 ||
							contactFormData.subject.length == 0 ||
							contactFormData.context.length == 0
						}>
						ارسال
					</button>
				</div>
				<div className='picture'>
					<div>
						<Image
							src={RZ}
							alt=''
						/>
					</div>
					<div>
						<Image
							src={TextLogo}
							alt=''
						/>
					</div>
					<div>
						<Image
							src={RZBig}
							alt=''
						/>
					</div>
				</div>
				<div className='details'>
					<div>
						<h4>بیلبورد زرین</h4>
						<p>
							بیلبورد زرین کار خود را در زمینه ی بیلبوردهای
							تبلیغاتی در سال 1393 شروع کرد و در این سال ها بدلیل
							قیمت مناسب و خدمات متفاوت در طراحی و کیفیت چاپ و
							همچنین سرعت در اجرای بیلبورد توانسته جایگاه ارزنده
							ای را درمیان رقبای خود کسب کند. این شرکت با جا نمایی
							حدود 350 بیلبورد، پل، تابلو و استند در تمامی شریان
							اصلی و مراکز شهرهای استان مازندران میتواند نقش بسیار
							مهمی در معرفی محصولات و خدمات شما بصورت گسترده داشته
							باشد.
						</p>
						<h4>کانون تبلیغاتی زرین</h4>
						<p>
							کانون تبلیغات زرین توانسته در زمینه ی تبلیغات محیطی
							به کسب و کارهای مشتریان خود رونق بخشد وهمچنین در
							زمینه های مشاور تبلیغاتی و مدیریت گسترده فضای مجازی
							و تولید وتهیه ی پخش انواع تیزرهای انیمیشن و رئال
							تبلیغاتی در رسانه های کشوری بستر گسترده ای را جهت
							معرفی و برند سازی کسب و کارهای نوپا و با سابقه فراهم
							سازد.
						</p>
					</div>
				</div>
				<div className='newsletter relative'>
					<h4>خبرنامه</h4>
					<p>به راحتی یک کلیک مشترک خبرنامه زرین شوید.</p>
					<div>
						<input
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='آدرس ایمیل یا شماره تماس'
						/>
						<button
							onClick={e => setSendEmail(true)}
							disabled={
								email.length == 0 || email.indexOf('@') < 0
							}>
							عضویت
						</button>
					</div>
					<Image
						src={Fly}
						alt=''
						height={0}
						width={0}
						style={{
							position: 'absolute',
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ContactPage;

function contactDataReducer(state, action) {
	switch (action.type) {
		case 'name':
			return {
				...state,
				name: action.payload,
			};
		case 'phone':
			if (
				/^(\s*|\d+)$/.test(action.payload) &&
				action.payload.length < 12
			)
				return {
					...state,
					phone: action.payload,
				};
			else return state;
		case 'business':
			return {
				...state,
				business: action.payload,
			};
		case 'subject':
			return {
				...state,
				subject: action.payload,
			};
		case 'context':
			return {
				...state,
				context: action.payload,
			};
		case 'clear':
			return {
				name: '',
				phone: '',
				business: '',
				subject: '',
				context: '',
			};
		default:
			throw new Error('invalid action given.');
	}
}
