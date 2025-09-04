import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Fade, Slide, StaggerItems, Background, Loader } from '@config/transition/Animation';

export default function Transition({ children }: { children: ReactNode }) {
	return (
		<>
			<motion.div variants={StaggerItems} initial="initial" animate="animate" exit="exit">
				<motion.div className="bg-theme-primary-100 fixed top-0 left-0 z-57 h-dvh w-full" variants={Slide} />
				<motion.div className="bg-theme-accent-100 fixed top-0 left-0 z-58 h-dvh w-full" variants={Slide} />
				<motion.div className="bg-theme-primary-100 fixed top-0 left-0 z-59 h-dvh w-full" variants={Slide} />
				<motion.div className="bg-theme-accent-100 fixed top-0 left-0 z-58 h-dvh w-full" variants={Slide} />
			</motion.div>

			<motion.div
				variants={Background}
				initial="initial"
				animate="animate"
				exit="exit"
				className="from-dark animate-rotate-border via-accent-100 to-dark fixed top-0 left-0 z-56 h-dvh w-full bg-conic/[from_var(--border-angle)] from-80% via-90% to-100% p-2">
				<div className="bg-dark pointer-events-none z-57 flex h-full w-full items-center justify-center" />
			</motion.div>
			<motion.div variants={Loader} initial="initial" animate="animate" exit="exit" className="z-56">
				<div className="ambience animate-glow-pulse"></div>
				<svg
					id="BaseCap"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 160 125.33"
					className="fixed top-1/2 left-1/2 z-56 h-36 w-36 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
					<defs>
						<linearGradient
							id="cap-gradient"
							x1="100.85"
							y1="73.23"
							x2="139.26"
							y2="73.23"
							gradientTransform="translate(140.34 -16.33) rotate(89.97)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="var(--color-accent-100)" />
							<stop offset="1" stopColor="var(--color-primary-100)" />
						</linearGradient>
						<linearGradient id="cap-gradient1" x1="18.21" y1="44.29" x2="111.34" y2="44.29" xlinkHref="#cap-gradient" />
					</defs>
					<path
						stroke="var(--color-primary-100)"
						strokeWidth=".25px"
						strokeMiterlimit="10"
						fill="url(#cap-gradient)"
						d="M104.47,99.1c-30.24-.05-56.45-5.17-72.86-14.52-5.66,2.73-23.48,11.58-28.2,17.19-.97,1.15-2.1,4.12-2.18,5.62-.05,1.17,1.27,4.48,1.27,4.48,39.96,16.97,62.32,10.57,84.68,6.21,23.79-4.63,45.38-19.81,45.38-19.81.18-.2.39-.4.59-.59-9.81.95-19.43,1.45-28.67,1.43Z"
					/>
					<path
						stroke="var(--color-primary-100)"
						strokeWidth=".25px"
						strokeMiterlimit="10"
						fill="url(#cap-gradient1)"
						d="M105.27,8.67h-.34c-.27-3.75-4.82-6.75-10.43-6.76s-10.5,3.16-10.51,7.09c0,.07.02.12.02.19-53.14,5.43-51.04,42.62-49.99,62.7.18,3.52-.07,6.98-.31,9.23,21.65,12.38,61.67,16.98,105.32,11.84,8.09-5.56,19.14-10.88,19.14-10.88,0,0,.72-20.62.05-27.45-3.53-35.87-34.19-44.19-52.96-45.95Z"
					/>
				</svg>
			</motion.div>

			<motion.div className="pointer-events-none" variants={Fade} initial="initial" animate="animate" exit="exit">
				{children}
			</motion.div>
		</>
	);
}
