'use client';
import { useState, useLayoutEffect } from 'react';

const useMobileScreen = () => {
	const [mobile, isMobile] = useState(true);

	const detectMobile = () => {
		if (window.innerWidth > 768) isMobile(false);
		else isMobile(true);
	};

	useLayoutEffect(() => {
		detectMobile();
		window.addEventListener('resize', detectMobile);
		return () => window.removeEventListener('resize', detectMobile);
	}, []);

	return mobile;
};

export default useMobileScreen;
