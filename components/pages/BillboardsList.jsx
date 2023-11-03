'use client';
import '../../styles/billboardsbystate.scss';

import { Header, Footer } from '../sections';
import { Hero, ListCanvas } from '../sections/billboardslist';

const BillboardsList = ({
	listonly = false,
	showByState = false,
	hasHero = true,
	pageTitle = 'همه بیلبوردها',
	data = [],
	cities = [],
	pagination = {},
	slug = '',
	children,
}) => {
	return (
		<>
			<Header />
			{hasHero && (
				<Hero
					cities={cities}
					title={pageTitle}
					showByState={showByState}>
					{children}
				</Hero>
			)}
			<ListCanvas
				pagination={pagination}
				data={data}
				canSearch={!listonly}
				slug={slug}
			/>
			<Footer />
		</>
	);
};

export default BillboardsList;
