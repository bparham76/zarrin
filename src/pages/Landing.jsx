import { Header, Footer } from '../components/sections';
import {
	BillboardSearch,
	Hero,
	ChosenCities,
	BillboardInfo,
	BlogEnteries,
	PodcastEnteries,
} from '../components/sections/landing';

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
			<Footer />
		</>
	);
};

export default Landing;
