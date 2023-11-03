'use client';
import './styles/blogpostenteryitem.scss';
import { BsShare, BsCalendarCheck, BsPeople, BsBook } from 'react-icons/bs';
import { GoGoal } from 'react-icons/go';
import { PiGraduationCap } from 'react-icons/pi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BASE_URL, relativeToAbsoluteURL } from '@/utils/service';

const JDate = require('jalali-date');

const BlogPostEnteryItem = ({ Practical = undefined, data = { id: 1 } }) => {
	const router = useRouter();
	const date = new JDate(new Date(data.created_at)).format('DD MMMM YYYY');

	return (
		<div
			className='blog-post-entery-item cursor-pointer'
			onClick={() => router.push('/blog/' + data.id)}>
			<div className='picture relative'>
				<Image
					src={relativeToAbsoluteURL(data.image)}
					alt={data.title}
					fill
					className='object-cover w-full'
				/>
				{Practical !== undefined && (
					<div
						className={
							Practical ? 'annotation practical' : 'annotation'
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
						اطلاعات بیشتر در مورد پست وارد شده در انیم کان ذکر می
						گردد و فلان بیثال چاپ وبسایت طراجی اطلاعات
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
								`https://billboardzarin.com/blog/${data.id}`
							);
						}}>
						<BsShare />
					</button>
					<button onClick={() => router.push('/blog/' + data.id)}>
						<BsBook />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogPostEnteryItem;
