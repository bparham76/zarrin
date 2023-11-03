'use client';
import './styles/listcanvas.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import {
	FaChevronUp,
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
} from 'react-icons/fa6';
import { PiBag } from 'react-icons/pi';
import { MdSort } from 'react-icons/md';
import { BiFilterAlt, BiSolidChevronsDown } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { BillboardSingle, BillboardSelectedItem, Modal } from '../../common';
import { useRouter, useSearchParams } from 'next/navigation';

const ListCanvas = ({
	canSearch = true,
	data = [],
	pagination = {},
	slug = '',
}) => {
	const [selectedFilters, setSelectedFilters] = useState();

	const menuRef = useRef();
	const [panelOpen, setPanelOpen] = useState(false);
	const [currentSortingFilter, setCurrentSortingFilter] = useState(-1);
	const [showModal, setShowModal] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePrevPage = () => {
		if (parseInt(pagination?.page) == 1) return;

		let address = canSearch ? '/order/' : '/billboards/';
		if (slug != '') address = address + slug.toLowerCase() + '/';
		let number = parseInt(pagination?.page) - 1;
		router.push(address + number + '?' + searchParams.toString());
	};

	const handleNextPage = () => {
		let address = canSearch ? '/order/' : '/billboards/';
		if (slug != '') address = address + slug.toLowerCase() + '/';
		let number = parseInt(pagination?.page) + 1;
		if (
			number >
			Math.ceil(
				parseInt(pagination?.count) / parseInt(pagination?.per_page)
			)
		)
			return;

		router.push(address + number + '?' + searchParams.toString());
	};

	const SelectedItem = ({ id, name }) => {
		const handleRemove = () =>
			setCartItems([...cartItems.filter(item => item.id != id)]);

		return (
			<BillboardSelectedItem
				name={name}
				handleRemove={handleRemove}
			/>
		);
	};

	const ListItem = ({ data }) => {
		const handleSelect = () =>
			setCartItems([...cartItems, { id: data?.id, name: data?.title }]);
		const handleRemove = () =>
			setCartItems([...cartItems.filter(item => item.id != id)]);

		return (
			<BillboardSingle
				handleRemove={handleRemove}
				handleSelect={handleSelect}
				selected={cartItems.filter(item => item.id == id).length > 0}
				selectable={canSearch}
				data={data}
			/>
		);
	};

	const sortingFilters = [
		{ id: 0, title: 'بیشترین بازدید' },
		{ id: 1, title: 'زودترین اکران' },
		{ id: 2, title: 'منتخب' },
		{ id: 3, title: 'ابعاد' },
	];

	const SortingFilterItem = ({ filterId, title }) => {
		return (
			<div
				className={
					filterId == currentSortingFilter
						? 'filter-item selected'
						: 'filter-item'
				}
				onClick={e =>
					setCurrentSortingFilter(
						filterId == currentSortingFilter ? -1 : filterId
					)
				}>
				<GrFormClose />
				{title}
			</div>
		);
	};

	useEffect(() => {
		if (panelOpen) {
			menuRef?.current?.parentNode?.classList.remove('closed');
			setTimeout(() => {
				menuRef?.current?.parentNode?.classList.add('show');
				menuRef?.current?.classList.remove('closed');
			}, 10);
		} else {
			menuRef?.current?.classList.add('closed');
			menuRef?.current?.parentNode?.classList.remove('show');
			setTimeout(() => {
				menuRef?.current?.parentNode?.classList.add('closed');
			}, 150);
		}
	}, [panelOpen]);

	useLayoutEffect(() => {
		const filterHeaders = document.querySelectorAll(
			'div.filter-group>div.title'
		);

		const handleExpand = e => {
			e.preventDefault();

			if (e.target.parentNode.classList.contains('expand')) return;

			filterHeaders?.forEach(other =>
				other.parentNode.classList.remove('expand')
			);

			e.target.parentNode.classList.add('expand');
		};

		filterHeaders?.forEach(item =>
			item.addEventListener('click', handleExpand)
		);

		return () => {
			filterHeaders?.forEach(item =>
				item.removeEventListener('click', handleExpand)
			);
		};
	}, []);

	useEffect(() => {
		setSelectedFilters([
			{ id: 1001, title: 'تنکابن' },
			{ id: 1007, title: 'رامسر' },
			{ id: 1008, title: 'نشتارود' },
			{ id: 1009, title: 'شیرود' },
			{ id: 2055, title: 'بین بلواری' },
			{ id: 9001, title: 'قابل اکران' },
		]);

		return () => setSelectedFilters([]);
	}, []);

	return (
		<div className='canvas'>
			{canSearch && (
				<div
					className='options-table closed'
					onClick={e => setPanelOpen(false)}>
					<div
						ref={menuRef}
						onClick={e => e.stopPropagation()}
						className='panel closed lg:mt-2'>
						<div className='selected-view-filters'>
							<div className='title'>
								<p>فیلترها:</p>
							</div>
							{selectedFilters?.map((item, index) => (
								<p key={index}>{item.title}</p>
							))}
						</div>
						<div className='view-filter-groups'>
							<div className='filter-group expand'>
								<div className='title'>
									<p>شهر</p>
									<FaChevronUp className='up' />
									<FaChevronDown className='down' />
								</div>
								<div className='filter-list'>
									<label>
										<p>تنکابن</p>
										<input
											type='checkbox'
											name=''
											id=''
										/>
									</label>
									<label>
										<p>رامسر</p>
										<input
											type='checkbox'
											name=''
											id=''
										/>
									</label>
									<label>
										<p>متل قو</p>
										<input
											type='checkbox'
											name=''
											id=''
										/>
									</label>
								</div>
							</div>
							<div className='filter-group'>
								<div className='title'>
									<p>قابلیت اکران</p>
									<FaChevronUp className='up' />
									<FaChevronDown className='down' />
								</div>
								<div className='filter-list'></div>
							</div>
							<div className='filter-group'>
								<div className='title'>
									<p>ابعاد سازه</p>
									<FaChevronUp className='up' />
									<FaChevronDown className='down' />
								</div>
								<div className='filter-list'></div>
							</div>
							<div className='filter-group'>
								<div className='title'>
									<p>نوع سازه</p>
									<FaChevronUp className='up' />
									<FaChevronDown className='down' />
								</div>
								<div className='filter-list'></div>
							</div>
						</div>
						<div className='action'>
							<button>اعمال فیلتر ها</button>
						</div>
					</div>
				</div>
			)}
			<div
				className={
					canSearch ? 'list-container' : 'list-container listview'
				}>
				<div className='controls'>
					{canSearch && (
						<>
							<div className='search'>
								<AiOutlineSearch />
								<input
									type='text'
									placeholder='جستجو'
									name=''
									id=''
								/>
								<button>
									جستجو
									<AiOutlineSearch />
								</button>
							</div>
							<div className='order-list'>
								<div className='count'>
									<p>{cartItems.length}</p>
								</div>
								<button onClick={e => setShowModal(true)}>
									لیست سفارش
									<PiBag />
								</button>
							</div>

							<div className='order-by'>
								<button onClick={e => setPanelOpen(!panelOpen)}>
									<BiFilterAlt />
									فیلتر ها
								</button>
								<button>
									<MdSort />
									مرتب سازی
								</button>
								<div className='sorting-filters-title'>
									<MdSort />
									<p>مرتب کردن بر اساس:</p>
								</div>
								<div className='sorting-filters'>
									{sortingFilters.map((item, index) => (
										<SortingFilterItem
											key={index}
											title={item.title}
											filterId={item.id}
										/>
									))}
								</div>
							</div>
						</>
					)}
				</div>
				<div className='billboard-list-items'>
					{data?.map((item, index) => (
						<ListItem
							key={index}
							data={item}
						/>
					))}
					<div className='pagination'>
						<button onClick={handlePrevPage}>
							<FaChevronRight />
							قبلی
						</button>
						<p>
							صفحه {pagination?.page} از{' '}
							{Math.ceil(
								pagination?.count / pagination?.per_page
							)}
						</p>
						<button onClick={handleNextPage}>
							بعدی
							<FaChevronLeft />
						</button>
					</div>
					{/* <div className='show-more'>
						<button onClick={handleAppendList}>
							<BiSolidChevronsDown />
							نمایش بیشتر
						</button>
						<div>18/125</div>
					</div> */}
				</div>
			</div>

			<Modal
				show={showModal}
				onClose={e => setShowModal(false)}>
				<div className='selected-items-list'>
					{cartItems.length == 0 ? (
						<div className='w-full h-20 flex justify-center items-center'>
							<p className='text-xl'>
								موردی برای نمایش وجود ندارد.
							</p>
						</div>
					) : (
						<>
							<div className='list'>
								{cartItems.map((item, index) => (
									<SelectedItem
										key={index}
										id={item.id}
										name={item.name}
									/>
								))}
							</div>
							<div className='action'>
								<button>ثبت سفارش</button>
							</div>
						</>
					)}
				</div>
			</Modal>
		</div>
	);
};

export default ListCanvas;
