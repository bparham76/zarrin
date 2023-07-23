import { Header, Footer } from '../components/common';
import {
	BillboardSearch,
	Hero,
	ChosenCities,
	BillboardInfo,
} from '../components/sections';

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<BillboardSearch />
			<ChosenCities />
			<BillboardInfo />
			<div className='h-[1000px] w-full'></div>
			<Footer />
		</>
	);
};

export default Landing;
