'use client';
import './styles/blogcontents.scss';
// import { FaChevronDown } from 'react-icons/fa6';
import { BsShare, BsBook, BsCalendarCheck, BsPeople } from 'react-icons/bs';
import { PiGraduationCap } from 'react-icons/pi';
import { GoGoal } from 'react-icons/go';
import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { relativeToAbsoluteURL } from '@/utils/service';

const JDate = require('jalali-date');

const BlogContents = ({ data = [] }) => {
	const router = useRouter();

	const BlogPostEntry = ({
		Practical = undefined,
		data = { id: 1, title: '', image: '', created_at: '' },
	}) => {
		const date = new JDate(new Date(data.created_at)).format(
			'DD MMMM YYYY'
		);
		if (!data) return;
		return (
			<div
				className='blog-post'
				onClick={() => router.push('/blog/' + data.id)}>
				{/* <Link href={'/blog/' + data.id}> */}
				<div className='picture relative'>
					<Image
						src={relativeToAbsoluteURL(data.image)}
						alt={data.id}
						fill
						className='object-cover'
					/>
					{Practical !== undefined && (
						<div
							className={
								Practical
									? 'annotation practical'
									: 'annotation'
							}>
							{Practical ? (
								<>
									<GoGoal />
									<p>مقاله کاربردی</p>
								</>
							) : (
								<>
									<PiGraduationCap />
									<p>مقاله آموزشی</p>
								</>
							)}
						</div>
					)}
				</div>
				<div className='info'>
					<div className='headline'>
						<p>{data.title}</p>
					</div>
					<div className='details'>
						<p>
							اطلاعات بیشتر در مورد پست وارد شده در انیم کان ذکر
							می گردد و فلان بیثال چاپ وبسایت طراجی اطلاعات
						</p>
					</div>
					<div className='entities'>
						<div>
							<BsCalendarCheck />
							<p>{date}</p>
						</div>
						<div>
							<BsPeople />
							<p>بیلبورد زرین</p>
						</div>
					</div>
					<div className='actions'>
						<button
							onClick={e => {
								e.stopPropagation();
								navigator.clipboard.writeText(
									'https://billboardzarin.com/blog/' + data.id
								);
							}}>
							<BsShare />
						</button>
						<button onClick={() => router.push('/blog/' + data.id)}>
							<BsBook />
						</button>
					</div>
				</div>
				{/* </Link> */}
			</div>
		);
	};

	function GenerateData() {
		let Stacks = [];

		for (let i = 0; i < data.length; i += 3) {
			Stacks.push(
				<div className='stack'>
					{i <= data.length && <BlogPostEntry data={data[i]} />}
					{i + 1 <= data.length && data[i + 1] && (
						<BlogPostEntry data={data[i + 1]} />
					)}
					{i + 2 <= data.length && data[i + 2] && (
						<BlogPostEntry data={data[i + 2]} />
					)}
				</div>
			);
		}

		return Stacks;
	}
	return (
		<div className='blog'>
			<div className='blog-container'>
				<GenerateData />
			</div>
			{/*
			<div className='show-more'>
				<button>
					<FaChevronDown />
					نمایش بیشتر
				</button>
			</div>
			*/}
		</div>
	);
};

export default BlogContents;
