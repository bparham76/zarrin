import './styles/billboarddetails.scss';
import { Header, Footer } from '../components/sections';

const BillboardDetails = () => {
	return (
		<>
			<Header />
			<div className='page'>
				<div className='gallery'>Gallery</div>
				<div className='cta'>Call to action</div>
				<div className='description'>more details</div>
			</div>
			<Footer />
		</>
	);
};

export default BillboardDetails;
