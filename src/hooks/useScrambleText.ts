import { useCallback, useEffect, useState } from 'react';

export function useScrambleText(text: string, active: boolean, duration = 1000, interval = 30, delay = 1200) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const scrambleText = useCallback(
		() =>
			text
				.split('')
				.map(() => chars[Math.floor(Math.random() * chars.length)])
				.join(''),
		[text, chars]
	);

	const [display, setDisplay] = useState(scrambleText());

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null;
		let frame = 0;
		let cancelled = false;

		const scramble = () => {
			if (cancelled) return;
			if (frame * interval < duration) {
				setDisplay(
					text
						.split('')
						.map((character, index) =>
							frame * interval > (index * duration) / text.length
								? character
								: chars[Math.floor(Math.random() * chars.length)]
						)
						.join('')
				);
				frame++;
				setTimeout(scramble, interval);
			} else {
				setDisplay(text);
			}
		};

		if (active) {
			timeoutId = setTimeout(scramble, delay);
		} else {
			setDisplay(scrambleText());
		}

		return () => {
			cancelled = true;
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [active, text, duration, interval, delay, scrambleText]);

	return display;
}
