'use client';
import './styles/billboardselecteditem.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';

const BillboardSelectedItem = ({ handleRemove, name }) => {
	return (
		<div className='item-container'>
			<div className='image'></div>
			<div>رامسر</div>
			<div>{name}</div>
			<div className='id-code'>1422</div>
			<div>بین بلواری</div>
			<div>12X5</div>
			<div>رزرو شده</div>
			<div className='flex gap-2'>
				<button onClick={handleRemove}>
					<FaRegTrashCan />
				</button>
				<AiOutlineCheckCircle />
			</div>
		</div>
	);
};

export default BillboardSelectedItem;
