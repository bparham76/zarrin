import {
	Header,
	Footer,
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
			<div className='h-[100rem] w-full'></div>
			<Footer />
		</>
	);
};

export default Landing;
