import { useRef } from 'react';
import { animate, useIsomorphicLayoutEffect, type KeyframeOptions } from 'framer-motion';

import { usePageState } from '@hooks/usePageState';

type AnimatedCounterProps = {
	from: number;
	to: number;
	animationOptions?: KeyframeOptions;
};

export default function AnimatedCounter({ from, to, animationOptions }: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const { pageState } = usePageState();

	useIsomorphicLayoutEffect(() => {
		const element = ref.current;

		if (!element) return;

		element.textContent = String(from);

		if (pageState === 'Intro') {
			const controls = animate(from, to, {
				duration: 5,
				ease: 'easeInOut',
				...animationOptions,
				onUpdate(value) {
					element.textContent = String(value.toFixed(0));
				}
			});

			return () => controls.stop();
		}
	}, [ref, from, to, pageState]);

	return <span ref={ref} className={`${pageState === 'Default' && 'opacity-0'}`} />;
}
