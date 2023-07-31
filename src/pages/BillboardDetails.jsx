import './styles/billboarddetails.scss';
import { Header, Footer } from '../components/sections';
import { BillboardSlider } from '../components/common';
import {
	Gallery,
	CTA,
	Description,
} from '../components/sections/billboard-details';

const BillboardDetails = () => {
	return (
		<>
			<Header />
			<div className='page'>
				<div className='gallery'>
					<Gallery />
				</div>
				<div className='cta'>
					<CTA />
				</div>
				<div className='description'>
					<Description />
				</div>
				<div className='similar-billboards'>
					<BillboardSlider />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BillboardDetails;
