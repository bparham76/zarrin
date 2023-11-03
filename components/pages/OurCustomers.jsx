'use client';

import '../../styles/ourcustomers.scss';
import { Header, Footer } from '../sections';
import { useLayoutEffect } from 'react';
import images from '@/public/img/customers/list';
import Image from 'next/image';

const OurCustomers = () => {
	useLayoutEffect(() => {
		document.body.style.backgroundColor = '#2f446a';

		return () => (document.body.style.backgroundColor = '#fff');
	});

	return (
		<>
			<Header />
			<div className='customers-container'>
				<h4>مشتریان ما:</h4>
				<div className='customers-list'>
					{images.map((item, index) => (
						<div
							key={index}
							className='customer-item relative'>
							<Image
								src={'/img/customers/' + item.href}
								alt={item.href}
								fill
							/>
						</div>
					))}
				</div>
			</div>
			<Footer quickAccess />
		</>
	);
};

export default OurCustomers;
