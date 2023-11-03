'use client';
import '../../styles/weblogandnews.scss';
import { Header, Footer } from '../sections';
import {
	PageSelector,
	BlogContents,
	NewsContents,
	PageSearch,
} from '../sections/weblogandnews';
import { useState, useEffect } from 'react';

const WeblogAndNews = ({ blogs = [], news = [] }) => {
	const [isWeblog, setIsWeblog] = useState(true);
	const [blogsData, setBlogsData] = useState(blogs);
	const [newsData, setNewsData] = useState(news);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (search == '') {
			setBlogsData(blogs);
			setNewsData(news);
		} else {
			setBlogsData(blogs.filter(item => item.title.includes(search)));
			setNewsData(news.filter(item => item.title.includes(search)));
		}
	}, [search]);

	return (
		<>
			<Header />
			<PageSearch
				search={search}
				setSearch={setSearch}
			/>
			<div className='news-blog-data'>
				<div className='title'>
					<PageSelector
						isWeblog={isWeblog}
						setIsWeblog={setIsWeblog}
					/>
				</div>
				<div className='content'>
					{isWeblog ? (
						<BlogContents data={blogsData} />
					) : (
						<NewsContents data={newsData} />
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default WeblogAndNews;
