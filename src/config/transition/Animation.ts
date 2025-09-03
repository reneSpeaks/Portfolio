import { type Variants } from 'framer-motion';

export const Fade: Variants = {
	initial: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
	animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
	exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const Loader: Variants = {
	initial: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
	animate: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
	exit: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
};

export const StaggerItems: Variants = {
	initial: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
	animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
	exit: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

export const Slide: Variants = {
	initial: {
		x: '100vw',
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5
		}
	},
	animate: {
		x: ['100vw', '-100vw'],
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5
		}
	},
	exit: {
		x: '100vw',
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5
		}
	}
};

export const Background: Variants = {
	initial: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5,
			delay: 0.5
		}
	},
	animate: {
		x: ['0', '-100vw'],
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5,
			delay: 0.5
		}
	},
	exit: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 20,
			duration: 5,
			delay: 0.5
		}
	}
};
