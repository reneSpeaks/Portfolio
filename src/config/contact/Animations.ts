import type { Variants } from 'framer-motion';

export const LetsTalk: Variants = {
	hidden: { y: '-100vh', opacity: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
	exit: { y: '-100vh', opacity: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }
};

export const About: Variants = {
	hidden: { y: '100vh', opacity: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
	exit: { y: '100vh', opacity: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }
};

export const Shadow: Variants = {
	hidden: { boxShadow: 'none', pointerEvents: 'none', opacity: 1, transition: { duration: 0.1 } },
	visible: {
		boxShadow: '5px 5px 25px var(--color-theme-accent-100)',
		pointerEvents: 'auto',
		opacity: 1,
		transition: { delay: 1.2 }
	},
	exit: { boxShadow: 'none', pointerEvents: 'none', opacity: 1, transition: { duration: 0.1 } }
};

export const Backdrop: Variants = {
	hidden: { opacity: 0, pointerEvents: 'none' },
	visible: { opacity: 0.75, pointerEvents: 'auto' }
};
