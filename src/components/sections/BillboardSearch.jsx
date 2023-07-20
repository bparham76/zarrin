import React from 'react';

const BillboardSearch = () => {
	const SearchInput = ({ title = '' }) => {
		return (
			<div className='bg-white rounded-2xl p-2 flex items-center'>
				<input
					className='text-2xl w-[12rem] focus:outline-none'
					type='text'
					name=''
					id=''
					placeholder={title}
				/>
				o
			</div>
		);
	};

	return (
		<div className='w-full px-[4rem] my-[2rem]'>
			<h2 className='text-slate-900 text-3xl mb-4 ms-8'>
				جستجوی بیلبورد:
			</h2>
			<div className='w-full bg-cyan-100 rounded-3xl p-4 flex justify-between gap-1 h-[6rem]'>
				<SearchInput title='استان' />
				<SearchInput title='شهر' />
				<SearchInput title='نوع سازه' />
				<SearchInput title='وضعیت اکران' />
				<button className='bg-blue-600 text-white px-4 w-[12rem] text-2xl rounded-2xl'>
					جستجو
				</button>
			</div>
		</div>
	);
};

export default BillboardSearch;
