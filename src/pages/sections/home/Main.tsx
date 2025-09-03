import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import AnimatedIcon from '@components/AnimatedIcon';

import { usePageState } from '@hooks/usePageState';

import { type PageState } from '@config/Page';
import { BusinessLinks } from '@config/Business';
import { Quotes as Citation, type Quotes } from '@config/Quotes';
import { Hero, SideNav, BaseCap, Quote } from '@config/main/Animations';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';
import arrowData from '@assets/layout/animation/lotties/arrow-down.json';
import background from '@assets/layout/Home_BG_Mateusz_Dach.jpg';

export default function Main() {
	const { pageState, setPageState } = usePageState();
	const [quote, setQuote] = useState<Quotes | null>(null);
	const [isStopped, setIsStopped] = useState(true);

	const defaultLottieOptions = {
		loop: false,
		autoplay: true,
		animationData: chevronData,
		rendererSettings: {
			fps: 60,
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	const arrowLottieOptions = {
		loop: true,
		autoplay: true,
		animationData: arrowData,
		rendererSettings: {
			fps: 60,
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	useEffect(() => {
		const randomQuote = Citation[Math.floor(Math.random() * Citation.length)];
		setQuote(randomQuote);
	}, []);

	return (
		<main className="text-primary-100 sticky top-0 z-10 flex h-dvh w-full justify-center place-self-start self-center overflow-x-hidden sm:p-4">
			<section className="relative z-10 m-4 mt-32 flex w-full max-w-7xl items-center justify-center">
				<motion.div
					variants={Hero}
					initial="hidden"
					animate={pageState === 'Default' ? 'visible' : 'hidden'}
					exit="exit"
					className="flex h-8/10 w-8/10 max-w-6xl flex-col justify-center gap-2">
					<h1 className="relative z-12 text-5xl font-black tracking-tight sm:text-7xl">
						René Weiberlenn
						{/* BaseCap */}
						<motion.svg
							variants={BaseCap}
							onClick={() => {
								const cap = document.getElementById('BaseCap');
								if (cap) {
									cap.classList.add('animate-jiggle');
									setTimeout(() => cap.classList.remove('animate-jiggle'), 1000);
								}
							}}
							id="BaseCap"
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 160 125.33"
							className="drop-shadow-dark hover:drop-shadow-accent-100 absolute -top-3 -left-2 z-12 h-8 w-8 transform cursor-pointer drop-shadow-xs sm:-top-4 sm:-left-3 sm:h-12 sm:w-12">
							<defs>
								<linearGradient
									id="linear-gradient"
									x1="100.85"
									y1="73.23"
									x2="139.26"
									y2="73.23"
									gradientTransform="translate(140.34 -16.33) rotate(89.97)"
									gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#208aae" />
									<stop offset="1" stopColor="#0d324d" />
								</linearGradient>
								<linearGradient
									id="linear-gradient1"
									x1="18.21"
									y1="44.29"
									x2="111.34"
									y2="44.29"
									xlinkHref="#linear-gradient"
								/>
							</defs>
							<path
								stroke="#0d324d"
								strokeWidth=".25px"
								strokeMiterlimit="10"
								fill="url(#linear-gradient)"
								d="M104.47,99.1c-30.24-.05-56.45-5.17-72.86-14.52-5.66,2.73-23.48,11.58-28.2,17.19-.97,1.15-2.1,4.12-2.18,5.62-.05,1.17,1.27,4.48,1.27,4.48,39.96,16.97,62.32,10.57,84.68,6.21,23.79-4.63,45.38-19.81,45.38-19.81.18-.2.39-.4.59-.59-9.81.95-19.43,1.45-28.67,1.43Z"
							/>
							<path
								stroke="#0d324d"
								strokeWidth=".25px"
								strokeMiterlimit="10"
								fill="url(#linear-gradient1)"
								d="M105.27,8.67h-.34c-.27-3.75-4.82-6.75-10.43-6.76s-10.5,3.16-10.51,7.09c0,.07.02.12.02.19-53.14,5.43-51.04,42.62-49.99,62.7.18,3.52-.07,6.98-.31,9.23,21.65,12.38,61.67,16.98,105.32,11.84,8.09-5.56,19.14-10.88,19.14-10.88,0,0,.72-20.62.05-27.45-3.53-35.87-34.19-44.19-52.96-45.95Z"
							/>
						</motion.svg>
					</h1>
					<h3 className="z-12 text-lg italic sm:text-xl">Passionate Web Developer</h3>
					<button
						onClick={() => setPageState('About' as PageState)}
						onMouseEnter={() => setIsStopped(false)}
						onMouseLeave={() => setIsStopped(true)}
						className="group button bg-primary-100 text-light hover:bg-primary-300 shadow-primary-100 relative z-12 mt-8 w-fit cursor-pointer px-8 py-3 text-lg font-bold tracking-widest shadow-md duration-300 ease-in-out">
						<span className="z-12">About Me</span>
						<div className="absolute top-1/2 left-40 -translate-y-1/2 cursor-pointer">
							<Lottie options={defaultLottieOptions} height={40} width={40} isStopped={isStopped} />
						</div>
						<div className="button-mask"></div>
					</button>

					{/* Logo */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						width="281"
						height="281"
						viewBox="0 0 256 256"
						className="absolute top-1/2 left-4/10 z-11 -translate-y-1/2 opacity-65">
						<defs>
							<clipPath id="clippath">
								<path
									d="M251.44,235.04h-40l-.5-.4-102.5-89.7,1.8-1.6,34.8-31,12.2-10.4c3.9-3.2,7.4-6.2,7.8-6.8,4.8-5.8,7.3-12.8,7.3-20.4,0-17.6-14.3-31.9-31.9-31.9H30.86L5.14,16.24l140.4-.1-.2.2c29.9,2.5,53.6,27.9,53.6,58.3,0,13.4-4.8,26.7-13.5,37.2-.5.6-2.3,2.3-2.6,2.6s-1.1,1-1.1,1l-.5.4-32.9,28.8,103.1,90.4Z"
									fill="none"
								/>
							</clipPath>
							<linearGradient
								id="linear-gradient"
								x1="-156.53"
								y1="-98.24"
								x2="115.46"
								y2="-98.24"
								gradientTransform="translate(156 235)"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stopColor="#0d324d" />
								<stop offset="1" stopColor="#1c7496" />
							</linearGradient>
							<clipPath id="clippath-1">
								<polygon
									points="54.9 147.2 134.9 77.2 101.4 77.2 21.4 147.2 122 235.3 155.5 235.3 54.9 147.2"
									fill="none"
								/>
							</clipPath>
							<linearGradient
								id="linear-gradient1"
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
						<g clipPath="url(#clippath)">
							<motion.path
								d="M-.5,29.8l126.8-.1c29.9,2.5,57.4,17,57.4,47.4,0,13.4-4.3,24.4-17.4,37.2-.5.6-2.3,2.3-2.6,2.6-.3.3-1.1,1-1.1,1l-.5.4-32.9,28.8,118.9,105.6"
								fill="none"
								stroke="url(#linear-gradient)"
								strokeDasharray="461 463"
								strokeMiterlimit="10"
								strokeWidth="70.34"
								initial={{ strokeDashoffset: 463 }}
								animate={{ strokeDashoffset: pageState === 'Intro' ? 463 : 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.2 }}
							/>
						</g>
						<g clipPath="url(#clippath-1)">
							<motion.path
								d="M154.6,249.8l-116.8-102.6c8.3-8.3,91.4-81.4,91.4-81.4"
								fill="none"
								stroke="url(#linear-gradient1)"
								strokeDasharray="278 280"
								strokeMiterlimit="10"
								strokeWidth="70.34"
								initial={{ strokeDashoffset: 280 }}
								animate={{ strokeDashoffset: pageState === 'Intro' ? 280 : 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.5 }}
							/>
						</g>
					</svg>
				</motion.div>
				<motion.ul
					variants={Hero}
					initial="hidden"
					animate={pageState === 'Default' ? 'visible' : 'hidden'}
					exit="exit"
					className="absolute right-0 z-12 hidden flex-col justify-between gap-15 text-4xl sm:flex">
					{BusinessLinks.map((item, index) => (
						<motion.li variants={SideNav} key={index} className="relative">
							<abbr className="group flex flex-col">
								<span className="pl-0.5 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									{item.name}
								</span>
								<a href={item.url} target="_blank" rel="noreferrer" className="cursor-pointer">
									<AnimatedIcon width={40} height={40} animationData={item.animationData} />
								</a>
							</abbr>
						</motion.li>
					))}
				</motion.ul>

				<motion.blockquote
					variants={Quote}
					initial="hidden"
					animate={pageState === 'Default' ? 'visible' : 'hidden'}
					exit="exit"
					className="pointer-events-none absolute right-0 bottom-0 z-10 hidden w-4/9 text-xs font-bold opacity-50 sm:block">
					{quote?.text} <br />— <cite>{quote?.author}</cite>
				</motion.blockquote>

				<div
					className="pointer-events-auto absolute bottom-0 left-1/2 h-10 w-10 -translate-x-1/2 cursor-pointer"
					onClick={() => {
						const nextSection = document.getElementById('about');
						if (nextSection) {
							nextSection.scrollIntoView({ behavior: 'smooth' });
						}
					}}>
					<Lottie options={arrowLottieOptions} height={40} width={40} />
				</div>
			</section>

			<img
				src={background}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-15"
			/>

			<div className="from-primary-100 to-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-l"></div>
			<div className="from-primary-100 to-accent-100 absolute bottom-0 z-11 h-1 w-full bg-gradient-to-r"></div>
		</main>
	);
}
