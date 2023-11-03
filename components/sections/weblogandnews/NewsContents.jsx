'use client';
import './styles/newscontents.scss';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';
import { BsShare, BsPeople, BsCalendarCheck } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { relativeToAbsoluteURL } from '@/utils/service';

const JDate = require('jalali-date');

const NewsContents = ({ data = [] }) => {
	const [selectedTime, setSelectedTime] = useState(0);
	const router = useRouter();

	const timeLine = [
		{ title: 'مهر 1402' },
		{ title: 'شهریور 1402' },
		{ title: 'مرداد 1402' },
		{ title: 'تیر 1402' },
		{ title: 'خرداد 1402' },
		{ title: 'اردیبهشت 1402' },
		{ title: 'فروردین 1402' },
		{ title: 'اسفند 1401' },
		{ title: 'بهمن 1401' },
		{ title: 'دی 1401' },
		{ title: 'آذر 1401' },
		{ title: 'آبان 1401' },
		{ title: 'مهر 1401' },
		{ title: 'شهریور 1401' },
		{ title: 'مرداد 1401' },
		{ title: 'تیر 1401' },
	];

	const TimelineEntery = ({ title, id }) => {
		return (
			<div
				className={
					selectedTime == id
						? 'timeline-entery selected'
						: 'timeline-entery'
				}
				onClick={e => setSelectedTime(id)}>
				<p>{title}</p>
				<div className='circular'></div>
				<div className='linear'></div>
			</div>
		);
	};

	const NewsEntery = ({ data }) => {
		const [showAll, setShowAll] = useState(false);
		const date = new JDate(new Date(data.created_at)).format(
			'DD MMMM YYYY'
		);

		return (
			<div
				className='news-entery'
				onClick={() => router.push('/news/' + data.id)}>
				<div className='picture relative'>
					<Image
						src={relativeToAbsoluteURL(data.image)}
						alt={data.id}
						fill
						className='object-cover w-full h-full'
					/>
				</div>
				<div className={showAll ? 'content full' : 'content'}>
					<h4>{data.title}</h4>
					<p>{data.abstract}</p>
					<button
						onClick={e => {
							e.stopPropagation();
							setShowAll(showAll => !showAll);
						}}>
						{showAll ? (
							<>
								کمتر
								<FaChevronUp />
							</>
						) : (
							<>
								بیشتر
								<FaChevronDown />
							</>
						)}
					</button>
					<div className='controls'>
						<div>
							<BsCalendarCheck />
							{date}
						</div>
						<div>
							<BsPeople />
							نام نویسنده
						</div>
						<div>
							<button>
								<BsShare />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='news'>
			<div className='news-container'>
				<div className='sidebar'>
					<div className='timeline'>
						<div className='title'>آرشیو زمانی:</div>
						<div className='timeline-enteries'>
							{timeLine.map((item, index) => (
								<TimelineEntery
									id={index}
									title={item.title}
									key={index}
								/>
							))}
						</div>
					</div>
					<div className='newsletter'>
						<p>خبرنامه</p>
						<p>جدیدترین آموزش ها و اخبار:</p>
						<input
							type='text'
							name=''
							id=''
							placeholder='ایمیل یا شماره تماس را وارد کنید'
						/>
						<button>ثبت</button>
					</div>
				</div>
				<div className='news-list'>
					{data?.map((item, index) => (
						<NewsEntery
							key={index}
							data={item}
						/>
					))}
				</div>
			</div>
			<div className='show-more'>
				{/* <button>
					<FaChevronDown />
					نمایش بیشتر
				</button> */}
			</div>
		</div>
	);
};

export default NewsContents;
