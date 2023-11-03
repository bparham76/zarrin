'use client';
import './styles/hero.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import images from '@/public/img/customers/list.json';
import Mazandaran from '@/components/common/Mazandaran';

const Hero = () => {
	const router = useRouter();

	const Counter = ({ title, count, active = false }) => {
		let classes = 'counter';
		if (active) classes += ' counter-active';
		else classes += ' counter-not-active';

		return (
			<div className={classes}>
				<p className='text-lg'>{title}</p>
				<p className='text-6xl'>{count}+</p>
			</div>
		);
	};

	const ColleagueIcon = ({ href, color }) => {
		return (
			<div
				className='colleague-icon relative'
				style={{ backgroundColor: color }}>
				<Image
					src={'/img/customers/' + href}
					alt={href}
					fill
				/>
			</div>
		);
	};

	const colleagues = images.slice(0, 9);

	return (
		<div className='hero-container'>
			<div className='hero-title-container'>
				<div className='title'>
					<h2>بزرگـتریـن</h2>
					<h6>مرجع اجاره بی واسطه بیلبورد در شمال کشور</h6>
				</div>
				<div className='counters'>
					<Counter
						title={'تعداد بیلبورد های قابل رزرو'}
						count={478}
						active
					/>
					<Counter
						title={'تعداد بیلبورد های رزرو شده'}
						count={235}
					/>
					<Counter
						title={'تعداد کل یبلبورد های موجود'}
						count={713}
					/>
				</div>
			</div>
			<div className='hero-app-container'>
				<div className='hero-app-canvas'>
					<div className='hero-app'>
						<Mazandaran />
					</div>
					<div className='hero-colleagues'>
						<div className='hero-colleagues-title'>
							<p>
								برند هایی که در این هفده سال افتخار همکاری با
								آنها را داشتیم:
							</p>
							<button onClick={() => router.push('/customers')}>
								مشاهده همه
							</button>
						</div>
						<div className='colleagues-icon-container'>
							{colleagues.map((item, index) => (
								<ColleagueIcon
									key={index}
									href={item.href}
									color={item.color}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
