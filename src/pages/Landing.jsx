// import Footer from '../components/common/Footer';
// import Header from '../components/common/Header';
// import BillboardSearch from '../components/sections/BillboardSearch';
// import Hero from '../components/sections/Hero';

import { Header, Footer } from '../components/common';
import { BillboardSearch, Hero, BlueContainer } from '../components/sections';

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<BillboardSearch />
			<BlueContainer />
			<div className='h-[1000px] w-full'></div>
			<Footer />
		</>
	);
};

export default Landing;
