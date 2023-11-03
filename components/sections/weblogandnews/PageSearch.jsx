'use client';
import './styles/pagesearch.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef, useState, useEffect } from 'react';

const PageSearch = ({ search, setSearch }) => {
	const catRef = useRef();
	const [catOpen, setCatOpen] = useState(false);
	const [text, setText] = useState('');

	const categories = [{ id: 0, title: 'عمومی' }];

	useEffect(() => {
		if (catOpen) {
			catRef.current?.classList.add('show');
			setTimeout(() => {
				catRef.current?.classList.add('open');
			}, 10);
		} else {
			catRef.current?.classList.remove('open');
			setTimeout(() => {
				catRef.current?.classList.remove('show');
			}, 110);
		}
	}, [catOpen]);

	return (
		<div className='page-search'>
			<div
				className='categories'
				ref={catRef}>
				<button
					onClick={e => {
						setCatOpen(catOpen => !catOpen);
						e.stopPropagation();
					}}>
					دسته بندی مقالات
					{catOpen ? <FaChevronUp /> : <FaChevronDown />}
				</button>
				<div
					className='list'
					onClick={e => setCatOpen(false)}>
					{categories.map((item, index) => (
						<button key={index}>{item.title}</button>
					))}
				</div>
				{catOpen && (
					<div
						className='fixed w-full h-full bg-transparent top-0 left-0 z-40 hidden lg:block'
						onClick={() => setCatOpen(false)}></div>
				)}
			</div>
			<div className='search-input'>
				<AiOutlineSearch />
				<input
					type='text'
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder='جستجو'
				/>
				<button onClick={e => setSearch(text)}>
					جستجو
					<AiOutlineSearch />
				</button>
			</div>
		</div>
	);
};

export default PageSearch;
