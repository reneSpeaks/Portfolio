import { type Variants } from 'framer-motion';

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
