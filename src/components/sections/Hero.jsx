const Hero = () => {
	const Counter = ({ title, count, active = false }) => {
		let classes = 'counter';
		if (active) classes += ' counter-active';
		else classes += ' counter-not-active';

		return (
			<div className={classes}>
				<p className='text-xl'>{title}</p>
				<br />
				<p className='text-6xl'>{count}+</p>
			</div>
		);
	};

	const ColleagueIcon = () => {
		return <div className='colleague-icon'></div>;
	};

	return (
		<div className='hero-container'>
			<div className='hero-title-container'>
				<div className='text-blue-950'>
					<h2 className='text-7xl text-center'>بزرگـتریـن</h2>
					<h6 className='text-3xl text-center'>
						مرجع اجاره بی واسطه
						<br />
						بیلبورد در شمال کشور
					</h6>
				</div>
				<div className='flex flex-col gap-10'>
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
					<div className='hero-colleagues'>
						<div className='hero-colleagues-title'>
							<p className='text-gray-400 text-xl'>
								برند هایی که در این هفده سال افتخار همکاری با
								آنها را داشتیم:
							</p>
							<button className='btn'>مشاهده همه</button>
						</div>
						<div className='colleagues-icon-container'>
							{[...new Array(10)].map((item, index) => (
								<ColleagueIcon key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
