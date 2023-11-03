'use client';
import '../../styles/billboarddetails.scss';
import { Header, Footer } from '../sections';
import { BillboardSlider } from '../common';
import { Gallery, CTA, Description } from '../sections/billboard-details';
import { useState, useLayoutEffect } from 'react';
import { BASE_URL } from '@/utils/service';
import { GoHourglass } from 'react-icons/go';

const BillboardDetails = ({ data }) => {
	const [isSimilarLoading, setIsSimilarLoading] = useState(true);
	const [similarError, setSimilarError] = useState(false);
	const [similarBillboards, setSimilarBillboards] = useState([]);

	// TODO: view

	// TODO: similar billboards

	useLayoutEffect(() => {
		fetch(`${BASE_URL}/api/billboards?page=1&per_page=12`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				city: data?.city?.id,
				arrange: data?.arrange,
			}),
		})
			.then(r => r.json())
			.then(r => {
				setSimilarBillboards(r?.data);
				setIsSimilarLoading(false);
			})
			.catch(e => {
				setSimilarError(true);
				setIsSimilarLoading(false);
			});
	}, []);

	return (
		<>
			<Header />
			<div className='page'>
				<div className='gallery'>
					<Gallery
						data={{
							gallery: data?.gallery,
							city: data?.city,
							image: data?.image,
							id: data?.id,
							title: data?.title,
						}}
					/>
				</div>
				<div className='cta'>
					<CTA
						width={data?.width}
						height={data?.height}
						address={data?.address}
						structureType={data?.structure_type?.label}
						area={data?.area}
						location={data?.location}
						reserved={data?.reserved}
					/>
				</div>
				<div className='description'>
					<Description
						data={data?.description}
						bid={data?.id}
					/>
				</div>
				<div className='similar-billboards'>
					{!isSimilarLoading && !similarError && (
						<BillboardSlider data={similarBillboards} />
					)}
					{isSimilarLoading && (
						<div className='w-full py-8 flex items-center justify-center'>
							<GoHourglass className='text-z-dark-blue animate-bounce' />
						</div>
					)}
					{similarError && (
						<div className='text-z-red w-full py-8 flex items-center justify-center'>
							خطا در برقراری ارتباط با سرور...
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BillboardDetails;
