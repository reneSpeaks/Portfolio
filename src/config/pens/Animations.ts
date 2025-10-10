import { type Variants } from 'framer-motion';

export const Scale: Variants = {
	rest: { scale: 1, transition: { duration: 0.3, type: 'tween' } },
	hover: { scale: 1.1, transition: { duration: 0.3, type: 'tween' } }
};

export const Counter: Variants = {
	rest: { top: '-16px', transition: { duration: 0.3 } },
	hover: { top: '-24px', transition: { duration: 0.3, delay: 0.3 } }
};

export const Line: Variants = {
	rest: { height: '80%', transition: { duration: 0.2 } },
	hover: { height: '100%', transition: { duration: 0.2 } }
};

export const PenMask: Variants = {
	rest: { width: '0%', transition: { duration: 0.3, ease: 'easeInOut' } },
	hover: { width: '100%', transition: { duration: 0.3, delay: 0.3, ease: 'easeInOut' } }
};

export const Pen: Variants = {
	rest: {},
	hover: {}
};
