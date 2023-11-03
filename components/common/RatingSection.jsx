import React from 'react';
import { BsStar, BsStarFill, BsShare } from 'react-icons/bs';

const RatingSection = () => {
	const Star = ({ fill = false }) => {
		return fill ? <BsStarFill /> : <BsStar />;
	};

	return <div>RatingSection</div>;
};

export default RatingSection;
