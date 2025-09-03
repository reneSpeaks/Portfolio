import { WindowSize } from '@config/Page';
import { useEffect, useState } from 'react';

export function useDotCount() {
	const [dotCount, setDotCount] = useState(() => (window.innerWidth >= WindowSize.desktop ? 20 : 10));

	useEffect(() => {
		const handleResize = () => {
			setDotCount(window.innerWidth >= WindowSize.desktop ? 20 : 10);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return dotCount;
}
