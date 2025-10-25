import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Fade, Slide, StaggerItems, Background, Loader, RRight, RLeft } from '@config/transition/Animation';

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
				className="from-dark animate-rotate-border via-accent-100 to-dark pointer-events-none fixed top-0 left-0 z-56 h-dvh w-full bg-conic/[from_var(--border-angle)] from-80% via-90% to-100% p-2">
				<div className="bg-dark pointer-events-none z-57 flex h-full w-full items-center justify-center" />
			</motion.div>
			<motion.div variants={Loader} initial="initial" animate="animate" exit="exit" className="pointer-events-none z-56">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="281"
					height="281"
					viewBox="0 0 256 256"
					className="fixed top-1/2 left-1/2 z-56 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
					<defs>
						<clipPath id="transition-r-clippath">
							<path
								d="M251.44,235.04h-40l-.5-.4-102.5-89.7,1.8-1.6,34.8-31,12.2-10.4c3.9-3.2,7.4-6.2,7.8-6.8,4.8-5.8,7.3-12.8,7.3-20.4,0-17.6-14.3-31.9-31.9-31.9H30.86L5.14,16.24l140.4-.1-.2.2c29.9,2.5,53.6,27.9,53.6,58.3,0,13.4-4.8,26.7-13.5,37.2-.5.6-2.3,2.3-2.6,2.6s-1.1,1-1.1,1l-.5.4-32.9,28.8,103.1,90.4Z"
								fill="none"
							/>
						</clipPath>
						<linearGradient
							id="transition-r-linear-gradient"
							x1="-156.53"
							y1="-98.24"
							x2="115.46"
							y2="-98.24"
							gradientTransform="translate(156 235)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#0d324d" />
							<stop offset="1" stopColor="#1c7496" />
						</linearGradient>
						<clipPath id="transition-r-clippath-1">
							<polygon points="54.9 147.2 134.9 77.2 101.4 77.2 21.4 147.2 122 235.3 155.5 235.3 54.9 147.2" fill="none" />
						</clipPath>
						<linearGradient
							id="transition-r-linear-gradient1"
							x1="-169.6"
							y1="-77.19"
							x2="21.81"
							y2="-77.19"
							gradientTransform="translate(156 235)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#0d324d" />
							<stop offset="1" stopColor="#1c7496" />
						</linearGradient>
					</defs>
					<g clipPath="url(#transition-r-clippath)">
						<motion.path
							variants={RRight}
							initial="initial"
							animate="animate"
							exit="exit"
							d="M-.5,29.8l126.8-.1c29.9,2.5,57.4,17,57.4,47.4,0,13.4-4.3,24.4-17.4,37.2-.5.6-2.3,2.3-2.6,2.6-.3.3-1.1,1-1.1,1l-.5.4-32.9,28.8,118.9,105.6"
							fill="none"
							stroke="url(#transition-r-linear-gradient)"
							strokeDasharray="461 463"
							strokeMiterlimit="10"
							strokeWidth="70.34"
						/>
					</g>
					<g clipPath="url(#transition-r-clippath-1)">
						<motion.path
							variants={RLeft}
							initial="initial"
							animate="animate"
							exit="exit"
							d="M154.6,249.8l-116.8-102.6c8.3-8.3,91.4-81.4,91.4-81.4"
							fill="none"
							stroke="url(#transition-r-linear-gradient1)"
							strokeDasharray="278 280"
							strokeMiterlimit="10"
							strokeWidth="70.34"
						/>
					</g>
				</svg>
			</motion.div>

			<motion.div className="pointer-events-none" variants={Fade} initial="initial" animate="animate" exit="exit">
				{children}
			</motion.div>
		</>
	);
}
