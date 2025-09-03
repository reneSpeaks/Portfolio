import { useEffect, useState } from 'react';

/**
 * useScrolled
 * @param offset - The scrollY offset after which the hook returns true
 * @returns boolean
 */
export function useScrolled(offset: number = 300): boolean {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > offset);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [offset]);

	return scrolled;
}
