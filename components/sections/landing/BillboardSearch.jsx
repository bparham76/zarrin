'use client';
import './styles/billboardsearch.scss';
import { FaChevronDown } from 'react-icons/fa6';
import { BiSearch } from 'react-icons/bi';

const BillboardSearch = () => {
	const SearchInput = ({ title = '' }) => {
		return (
			<div className='select'>
				<input
					type='text'
					name=''
					id=''
					placeholder={title}
				/>
				<FaChevronDown className='cursor-pointer' />
			</div>
		);
	};

	return (
		<div className='billboardsearch'>
			<h2>جستجوی بیلبورد:</h2>
			<div className='input-container'>
				<div>
					<SearchInput title='استان' />
					<SearchInput title='شهر' />
					<SearchInput title='نوع سازه' />
					<SearchInput title='وضعیت اکران' />
				</div>
				<div>
					<button>
						<p>جستجو</p>
						<BiSearch className='icon' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BillboardSearch;
