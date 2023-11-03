'use client';
import './styles/billboardsingle.scss';
import { FaRegMap } from 'react-icons/fa6';
import {
	BsAspectRatio,
	BsCartDash,
	BsCartPlus,
	BsStarFill,
} from 'react-icons/bs';
import { PiCalendarCheckBold } from 'react-icons/pi';
import {
	MdAddShoppingCart,
	MdInfoOutline,
	MdOutlineRemoveShoppingCart,
} from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { relativeToAbsoluteURL } from '@/utils/service';
import Image from 'next/image';
import Link from 'next/link';

const BillboardSingle = ({
	selected,
	handleRemove,
	handleSelect,
	selectable = true,
	data,
}) => {
	return (
		<div
			className={
				selected && selectable
					? 'billboard-single selected'
					: 'billboard-single'
			}>
			<div className='card-body'>
				<div className='image'>
					<Image
						className='object-cover'
						src={relativeToAbsoluteURL(data?.image)}
						alt=''
						fill
					/>
					<div className='item-controls'>
						{selectable && (
							<button
								onClick={selectable ? handleSelect : undefined}>
								<MdAddShoppingCart />
								لیست سفارش
							</button>
						)}
						<Link href={'/billboard/' + data.id}>
							<MdInfoOutline />
							جزئیات بیلبورد
						</Link>
					</div>
					<div
						onClick={selectable ? handleRemove : undefined}
						className='cart-remove'>
						<MdOutlineRemoveShoppingCart />
					</div>
					<div className='rating'>
						<BsStarFill className='text-yellow-600' />
						3.5/5
					</div>
				</div>
				<div className={selectable ? 'info' : 'info full'}>
					{/* <div className={selectable ? 'details' : 'details full'}> */}
					<div className='details'>
						<div>
							<Link href={'/billboard/' + data?.id}>
								<p>{data?.title}</p>
							</Link>
						</div>
						<div>
							<div>
								<FaRegMap />
								{data?.city?.label}
							</div>
							<div>
								<BsAspectRatio />
								{data?.height}
								<AiOutlineClose className='text-z-dark-blue font-normal' />
								{data?.width}
							</div>
							<div>
								<PiCalendarCheckBold />
								{data.reserved ? 'رزرو شده' : 'قابل اکران'}
							</div>
						</div>
					</div>
					{selectable && (
						<div className='controls'>
							<button
								onClick={selectable ? handleSelect : undefined}>
								<BsCartPlus />
							</button>
							<button
								onClick={selectable ? handleRemove : undefined}>
								<BsCartDash />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BillboardSingle;
