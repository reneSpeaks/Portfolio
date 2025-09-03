import { type Variants } from 'framer-motion';

export const NavigationStagger: Variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.1 }
	},
	closed: {
		transition: { staggerChildren: 0.03, delayChildren: 0 }
	}
};

export const Item: Variants = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		x: -250,
		opacity: 0,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
			ease: 'easeIn'
		}
	}
};

export const SideNavigation: Variants = {
	open: () => ({
		x: 0,
		transition: {
			duration: 0.5,
			ease: ['easeIn', 'easeOut']
		}
	}),
	closed: {
		x: -250,
		transition: {
			duration: 0.5,
			ease: ['easeIn', 'easeOut']
		}
	}
};

export const Divider: Variants = {
	open: {
		opacity: 1,
		transition: {
			delay: 0.5
		}
	},
	closed: {
		opacity: 0,
		transition: {
			delay: 0
		}
	}
};

export const Header: Variants = {
	hidden: { opacity: 0, y: '-8rem', transition: { duration: 0.3 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	exit: { opacity: 0, y: '8rem', transition: { duration: 0.3 } }
};
