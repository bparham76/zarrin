'use client';
import '../../styles/blogandcamppostpage.scss';
import { Header, Footer } from '../sections';
import { CommentsForm, BlogPostEnteryItem } from '../common';
import {
	BsCalendarCheck,
	BsPeople,
	BsShare,
	BsStarFill,
	BsStar,
} from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa6';
import { PiGraduationCap } from 'react-icons/pi';
import { GoGoal, GoVerified, GoHourglass } from 'react-icons/go';
import { BASE_URL, relativeToAbsoluteURL } from '@/utils/service';
import Image from 'next/image';
import { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

const JDate = require('jalali-date');

const BlogAndCampPostPage = ({
	isCamp = true,
	isNews = false,
	practical = undefined,
	data = { id: 1, title: '', body: '', tags: '', image: '', created_at: '' },
}) => {
	const date = new JDate(new Date(data.created_at)).format('DD MMMM YYYY');
	const router = useRouter();
	const [isRelativeLoading, setIsRelativeLoading] = useState(true);
	const [relativeBlogs, setRelativeBlogs] = useState([]);
	const [error, setError] = useState(false);

	useLayoutEffect(() => {
		// fetch(`${BASE_URL}/api/blogs-with-range/3/`)
		// 	.then(r => r.json())
		// 	.then(rldata => {
		// 		setRelativeBlogs(
		// 			rldata?.data.filter(item => item.id != data.id)
		// 		);
		// 		setIsRelativeLoading(false);
		// 	})
		// 	.catch(e => {
		// 		setError(true);
		// 		setIsRelativeLoading(false);
		// 	});
		fetch(`${BASE_URL}/api/all-blogs`)
			.then(r => r.json())
			.then(rldata => {
				const rlblogs = rldata?.data.filter(item => item.id != data.id);
				setRelativeBlogs([
					rlblogs[Math.floor(Math.random() * rlblogs.length)],
					rlblogs[Math.floor(Math.random() * rlblogs.length)],
				]);
				setIsRelativeLoading(false);
			})
			.catch(e => {
				setError(true);
				setIsRelativeLoading(false);
			});
	}, []);

	const RelativeSection = () => {
		return (
			<div className='related-posts'>
				<p>مقالات مرتبط:</p>
				{isRelativeLoading ? (
					<div className='col-span-2 flex items-center justify-center text-z-dark-blue pt-8 pb-16'>
						<GoHourglass className='text-4xl animate-bounce' />
					</div>
				) : (
					<>
						{error || !relativeBlogs ? (
							<div className='col-span-2 flex items-center justify-center text-z-red text-2xl'>
								خطا در برقراری ارتباط با سرور...
							</div>
						) : (
							<>
								<BlogPostEnteryItem data={relativeBlogs[0]} />
								<BlogPostEnteryItem data={relativeBlogs[1]} />
								<button onClick={() => router.push('/blog')}>
									مشاهده بیشتر <FaChevronLeft />
								</button>
							</>
						)}
					</>
				)}
			</div>
		);
	};

	return (
		<>
			<Header />
			<div className='blogpost-container'>
				<div className='blogpost-hero'>
					<Image
						src={relativeToAbsoluteURL(data.image)}
						alt={data.id}
						fill
						className='object-cover'
					/>
					<div className='post-info'>
						<h4>{data.title}</h4>
						<div className='post-details'>
							<p>
								<BsCalendarCheck />
								{date}
							</p>
							<p>
								<BsPeople />
								نام نویسنده
							</p>
						</div>
						{isCamp && (
							<div className='post-annotation light-blue'>
								<GoVerified />
								کمپین تبلیغاتی
							</div>
						)}
						{practical !== undefined && !isCamp && (
							<div
								className={
									practical
										? 'post-annotation blue'
										: 'post-annotation'
								}>
								{!practical ? (
									<>
										<PiGraduationCap />
										مقاله آموزشی
									</>
								) : (
									<>
										<GoGoal />
										مقاله کاربردی
									</>
								)}
							</div>
						)}
					</div>
				</div>
				<div
					className='blogpost-content'
					dangerouslySetInnerHTML={{ __html: data.body }}></div>
				{!isCamp && (
					<div className='sharing'>
						<button>
							<BsShare />
						</button>
						<div>
							<p>به این مقاله امتیاز دهید</p>
							{[...new Array(2)].map((item, index) => (
								<BsStar key={index} />
							))}
							{[...new Array(3)].map((item, index) => (
								<BsStarFill
									className='text-yellow-700'
									key={index}
								/>
							))}
						</div>
					</div>
				)}
				<div className='comments'>
					<CommentsForm />
				</div>
				{!isCamp && !isNews && <RelativeSection />}
			</div>
			<Footer quickAccess />
		</>
	);
};

export default BlogAndCampPostPage;
