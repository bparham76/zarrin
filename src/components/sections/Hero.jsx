const Hero = () => {
	const Counter = ({ title, count, active = false }) => {
		let classes =
			'w-full flex flex-col gap-0 px-6 text-center rounded-2xl rounded-tl-none';
		if (active)
			classes += ' bg-cyan-400 text-white shadow-lg shadow-cyan-400';
		else classes += ' text-gray-400 border border-gray-400';

		return (
			<div className={classes}>
				<p className='text-xl'>{title}</p>
				<br />
				<p className='text-6xl'>{count}+</p>
			</div>
		);
	};

	const ColleagueIcon = () => {
		return (
			<div className='aspect-square bg-gray-500 shadow-md w-12 rounded-full transition-all duration-200 hover:cursor-pointer hover:scale-[250%]'></div>
		);
	};

	return (
		<div className='w-full p-0 m-0 h-screen flex'>
			<div className='basis-1/4 flex flex-col items-center justify-around p-8'>
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
			<div className='basis-3/4 p-2 pe-0'>
				<div className='bg-gray-400 w-full h-full rounded-r-[4rem] flex items-end justify-center'>
					<div className='w-4/5 bg-white rounded-t-[4rem] h-[8rem] flex flex-col justify-between'>
						<div className='w-full flex justify-end items-center px-[4rem] pt-[1rem] gap-10'>
							<p className='text-gray-400 text-xl'>
								برند هایی که در این هفده سال افتخار همکاری با
								آنها را داشتیم:
							</p>
							<button className='px-4 text-xl text-white rounded-full bg-gray-400'>
								مشاهده همه
							</button>
						</div>
						<div className='w-full flex justify-center items-center px-[4rem] pt-[1rem] gap-8'>
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
