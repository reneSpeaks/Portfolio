import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Fade, Slide, StaggerItems, Background, Loader } from '@config/transition/Animation';

export default function Transition({ children }: { children: ReactNode }) {
	return (
		<>
			<motion.div variants={StaggerItems} initial="initial" animate="animate" exit="exit">
				<motion.div className="bg-theme-primary-100 fixed top-0 left-0 z-57 h-screen w-full" variants={Slide} />
				<motion.div className="bg-theme-accent-100 fixed top-0 left-0 z-58 h-screen w-full" variants={Slide} />
				<motion.div className="bg-theme-primary-100 fixed top-0 left-0 z-59 h-screen w-full" variants={Slide} />
				<motion.div className="bg-theme-accent-100 fixed top-0 left-0 z-58 h-screen w-full" variants={Slide} />
			</motion.div>

			<motion.div
				variants={Background}
				initial="initial"
				animate="animate"
				exit="exit"
				className="from-dark animate-rotate-border via-accent-100 to-dark fixed top-0 left-0 z-56 h-screen w-full bg-conic/[from_var(--border-angle)] from-80% via-90% to-100% p-2">
				<div className="bg-dark pointer-events-none z-57 flex h-full w-full items-center justify-center" />
			</motion.div>
			<motion.div
				variants={Loader}
				initial="initial"
				animate="animate"
				exit="exit"
				className="loader drop-shadow-dark fixed top-1/2 left-1/2 z-56 drop-shadow-lg"
			/>
			<motion.div className="pointer-events-none" variants={Fade} initial="initial" animate="animate" exit="exit">
				{children}
			</motion.div>
		</>
	);
}
