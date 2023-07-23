import '../styles/blogenteries.scss';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';

const BlogEnteries = () => {
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
					<p className='heading'>آخرین مطالب وبلاگ</p>
				</div>
				{[...new Array(5)].map((item, index) => (
					<Entery
						key={index}
						title='نر ماهی اشبل دار'
						summary='لورم'
					/>
				))}
				<button>
					مشاهده بیشتر <FaChevronLeft />
				</button>
			</div>
		</div>
	);
};

export default BlogEnteries;
