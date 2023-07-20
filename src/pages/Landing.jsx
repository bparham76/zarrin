import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import BillboardSearch from '../components/sections/BillboardSearch';
import Hero from '../components/sections/Hero';

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<BillboardSearch />
			<div className='h-[2000px] w-full'></div>
			<Footer />
		</>
	);
};

export default Landing;
