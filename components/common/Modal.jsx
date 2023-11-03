'use client';
import './styles/modal.scss';
import { useEffect, useRef, useState } from 'react';

const Modal = ({ children, show, onClose }) => {
	const modalRef = useRef();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (show) {
			setShowModal(true);
			setTimeout(() => {
				modalRef.current?.classList.add('show');
			}, 100);
		} else {
			modalRef.current?.classList.remove('show');
			setTimeout(() => {
				setShowModal(false);
			}, 100);
		}
	}, [show]);

	const closeModal = () => {
		modalRef.current?.classList.remove('show');
		setTimeout(() => {
			onClose();
		}, 100);
	};

	if (!showModal) return;

	return (
		<div
			className='modal-container'
			ref={modalRef}
			onClick={closeModal}>
			<div
				onClick={e => e.stopPropagation()}
				className='modal-card'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
