'use client';
import { Header, Footer } from '../sections';
import {
	BillboardSearch,
	Hero,
	ChosenCities,
	BillboardInfo,
	BlogEnteries,
	PodcastEnteries,
} from '../sections/landing';
import podcasts from '@/public/podcasts/data.json';

const Landing = ({
	banners = [],
	blogs = [],
	mostViewedBillboards = [],
	discountedBillboards = [],
	cities = [],
}) => {
	return (
		<>
			<Header />
			<Hero />
			<BillboardSearch />
			<ChosenCities data={cities} />
			<BillboardInfo
				banners={banners}
				mostViewedBillboards={mostViewedBillboards}
				discountedBillboards={discountedBillboards}
			/>
			<BlogEnteries data={blogs} />
			<PodcastEnteries podcasts={podcasts} />
			<Footer quickAccess={false} />
		</>
	);
};

export default Landing;
