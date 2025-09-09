import { easeInOut, type Variants } from 'framer-motion';

export const Backdrop: Variants = {
	hidden: { opacity: 0, pointerEvents: 'none' },
	visible: { opacity: 0.75, pointerEvents: 'auto' }
};
export const Container: Variants = {
	hidden: { pointerEvents: 'none' },
	visible: { pointerEvents: 'auto', transition: { duration: 0.3 } }
};

export const CloseButton: Variants = {
	hidden: { opacity: 0, y: -20, pointerEvents: 'none' },
	visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { delay: 0.3, duration: 0.3 } }
};

export const FlyFromLeft: Variants = {
	hidden: { x: '-100vw', transition: { duration: 0.5, ease: easeInOut } },
	visible: { x: 0, transition: { duration: 0.5, ease: easeInOut } }
};

export const FlyFromRight: Variants = {
	hidden: { x: '100vw', transition: { duration: 0.5, ease: easeInOut } },
	visible: { x: 0, transition: { duration: 0.5, ease: easeInOut } }
};
