'use client';
import './styles/blogenteries.scss';
import { FaChevronLeft } from 'react-icons/fa6';
import { useMobileScreen } from '../../../hooks';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { relativeToAbsoluteURL } from '@/utils/service';

const BlogEnteries = ({ data }) => {
	const mobile = useMobileScreen();
	const router = useRouter();

	const Entery = ({ data = { id: 1, title, image } }) => {
		return (
			<div
				className='entery'
				onClick={() => router.push('/blog/' + data.id)}>
				<div className='context'>
					<h4>{data.title}</h4>
					<p>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
						برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
						و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
						متخصصان.
					</p>
				</div>
				<div className='img'>
					<Image
						src={relativeToAbsoluteURL(data.image)}
						fill
						alt={data.id}
						className='object-cover'
					/>
				</div>
			</div>
		);
	};

	return (
		<div className='blog-container'>
			<div className='items-container'>
				<div className='title'>
					<p className='heading'>
						{mobile ? 'آخرین مقالات' : 'آخرین مطالب وبلاگ'}
					</p>
				</div>
				{data &&
					data?.map((item, index) => (
						<Entery
							key={index}
							data={item}
						/>
					))}
				<button onClick={() => router.push('/blog')}>
					{mobile ? 'مشاهده همه' : 'مشاهده بیشتر'}
					{!mobile && <FaChevronLeft />}
				</button>
			</div>
		</div>
	);
};

export default BlogEnteries;
