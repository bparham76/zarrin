import './styles/blogenteries.scss';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useMobileScreen } from '../../../hooks';

const BlogEnteries = () => {
	const mobile = useMobileScreen();
	const Entery = ({ title, summary }) => {
		const [hover, isHover] = useState(false);
		return (
			<div
				className='entery'
				onMouseEnter={(e) => isHover(true)}
				onMouseLeave={(e) => isHover(false)}>
				<div className='context'>
					<h4>{title}</h4>
					<p>{summary}</p>
				</div>
				<div className={'img' + (hover ? ' hover' : '')}></div>
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
				{[...new Array(5)].map((item, index) => (
					<Entery
						key={index}
						title='نر ماهی اشپل دار'
						summary='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان.'
					/>
				))}
				<button>
					{mobile ? 'مشاهده همه' : 'مشاهده بیشتر'}
					{!mobile && <FaChevronLeft />}
				</button>
			</div>
		</div>
	);
};

export default BlogEnteries;
