import { spring, type Variants } from 'framer-motion';

export const Hero: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3
		}
	}
};

export const BottomInfo: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeInOut'
		}
	},
	exit: {
		opacity: 0,
		y: 50,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

export const Scale: Variants = {
	rest: { scale: 1, transition: { duration: 0.3, delay: 0.3, type: 'tween' } },
	hover: { scale: 1.05, transition: { duration: 0.3, delay: 0.3, type: 'tween' } }
};

export const Hover: Variants = {
	rest: { x: '-100vw', transition: { duration: 0.4, ease: 'easeIn' } },
	hover: { x: '0', transition: { duration: 0.4, ease: 'easeOut' } }
};

export const Counter: Variants = {
	rest: { opacity: 0, y: 20, transition: { duration: 0.3, type: 'tween' } },
	hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3, type: 'tween' } }
};

export const CounterMask: Variants = {
	rest: { backgroundSize: '100% 0%', transition: { duration: 0.2, ease: 'easeOut' } },
	hover: { backgroundSize: '100% 100%', transition: { duration: 0.2, delay: 0.6, ease: 'easeOut' } }
};

export const BaseCap: Variants = {
	initial: { rotate: 0, transition: { type: spring, delay: 3 } },
	whileInView: { rotate: 365, transition: { type: spring, delay: 3 } }
};
