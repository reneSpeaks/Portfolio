import { spring, type Variants } from 'framer-motion';

export const Hero: Variants = {
	hidden: { pointerEvents: 'none', opacity: 0, transition: { duration: 0.3, staggerChildren: 0.03, delayChildren: 0 } },
	visible: {
		pointerEvents: 'auto',
		opacity: 1,
		transition: { duration: 0.6, delay: 0.8, staggerChildren: 0.07, delayChildren: 0.1 }
	},
	exit: { pointerEvents: 'none', opacity: 0, transition: { duration: 0.3, staggerChildren: 0.03, delayChildren: 0 } }
};

export const SideNav: Variants = {
	hidden: { opacity: 0, x: 250, transition: { duration: 0.3 } },
	visible: { opacity: 1, x: 0, transition: { duration: 2 } },
	exit: { opacity: 0, x: 250, transition: { duration: 0.3 } }
};

export const Quote: Variants = {
	hidden: { opacity: 0, y: 20, transition: { duration: 0.3 } },
	visible: { opacity: 0.5, y: 0, transition: { duration: 0.6 } },
	exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

export const BaseCap: Variants = {
	hidden: { rotate: 0, transition: { type: spring, delay: 3 } },
	visible: { rotate: 365, transition: { type: spring, delay: 3 } },
	exit: { rotate: 0, transition: { type: spring, delay: 3 } }
};
