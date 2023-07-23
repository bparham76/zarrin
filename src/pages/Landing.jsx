import {
	Header,
	Footer,
	BillboardSearch,
	Hero,
	ChosenCities,
	BillboardInfo,
	BlogEnteries,
	PodcastEnteries,
} from '../components/sections';

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<BillboardSearch />
			<ChosenCities />
			<BillboardInfo />
			<BlogEnteries />
			<PodcastEnteries />
			<div className='h-[100rem] w-full'></div>
			<Footer />
		</>
	);
};

export default Landing;
