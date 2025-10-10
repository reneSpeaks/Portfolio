import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Button from '@components/Button';
import ContactButton from '@components/ContactButton';

import { usePageState } from '@hooks/usePageState';

import { Projects } from '@config/projects/Projects';
import { Scale, Hover, Counter, CounterMask } from '@config/projects/Animations';
import type { PageState } from '@config/Page';

export default function Studies() {
	const [capClicks, setCapClicks] = useState(0);
	const { setPageState } = usePageState();

	return (
		<section
			id="studies"
			className="relative z-20 flex h-auto w-full flex-col items-center justify-center gap-20 bg-[#f3f3f3] px-5 py-20">
			<div className="absolute top-0 left-1/2 z-99 h-full w-full max-w-7xl -translate-x-1/2 border-x-2 border-[#EDEDED]" />
			<motion.div
				initial={{ y: '20px', opacity: 0 }}
				whileInView={{ y: '0', opacity: 1 }}
				viewport={{ amount: 0.5, once: true }}
				transition={{ duration: 0.3 }}
				className="relative flex flex-col items-center gap-4">
				<h4 className="text-accent-100 font-serif text-xl font-semibold">SHOWCASE</h4>
				<h2 className="text-theme text-4xl font-bold">Latest Works</h2>
				<motion.svg
					initial={{ rotate: 0 }}
					whileInView={{ rotate: 365 }}
					viewport={{ amount: 0.5, once: true }}
					transition={{ type: 'spring', delay: 1 }}
					onClick={() => {
						const cap = document.getElementById('BaseCapShowcase');
						if (cap) {
							setCapClicks(capClicks + 1);
							if (capClicks + 1 === 5) {
								cap.classList.add('animate-spin-cap');
								setTimeout(() => cap.classList.remove('animate-spin-cap'), 1200);
								setCapClicks(0);
							}
							cap.classList.add('animate-jiggle');
							setTimeout(() => cap.classList.remove('animate-jiggle'), 1000);
						}
					}}
					id="BaseCapShowcase"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 160 125.33"
					className="group pointer-events-auto absolute -top-4 -left-3 z-12 h-12 w-12 -rotate-45 transform cursor-pointer">
					<defs>
						<linearGradient
							id="cap-showcase-gradient"
							x1="100.85"
							y1="73.23"
							x2="139.26"
							y2="73.23"
							gradientTransform="translate(140.34 -16.33) rotate(89.97)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="var(--color-accent-100)" />
							<stop offset="1" stopColor="var(--color-primary-100)" />
						</linearGradient>
						<linearGradient
							id="cap-showcase-gradient1"
							x1="18.21"
							y1="44.29"
							x2="111.34"
							y2="44.29"
							xlinkHref="#cap-showcase-gradient"
						/>
						<linearGradient
							id="cap-showcase-hover-gradient"
							x1="100.85"
							y1="73.23"
							x2="139.26"
							y2="73.23"
							gradientTransform="translate(140.34 -16.33) rotate(89.97)"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="var(--color-accent-200)" />
							<stop offset="1" stopColor="var(--color-primary-300)" />
						</linearGradient>
						<linearGradient
							id="cap-showcase-hover-gradient1"
							x1="18.21"
							y1="44.29"
							x2="111.34"
							y2="44.29"
							xlinkHref="#cap-showcase-hover-gradient"
						/>
					</defs>
					<path
						className="transition-all duration-300 group-hover:fill-[url(#cap-showcase-hover-gradient)] group-hover:stroke-[var(--color-primary-300)]"
						stroke="var(--color-primary-100)"
						strokeWidth=".25px"
						strokeMiterlimit="10"
						fill="url(#cap-showcase-gradient)"
						d="M104.47,99.1c-30.24-.05-56.45-5.17-72.86-14.52-5.66,2.73-23.48,11.58-28.2,17.19-.97,1.15-2.1,4.12-2.18,5.62-.05,1.17,1.27,4.48,1.27,4.48,39.96,16.97,62.32,10.57,84.68,6.21,23.79-4.63,45.38-19.81,45.38-19.81.18-.2.39-.4.59-.59-9.81.95-19.43,1.45-28.67,1.43Z"
					/>
					<path
						className="transition-all duration-300 group-hover:fill-[url(#cap-showcase-hover-gradient1)] group-hover:stroke-[var(--color-primary-300)]"
						stroke="var(--color-primary-100)"
						strokeWidth=".25px"
						strokeMiterlimit="10"
						fill="url(#cap-showcase-gradient1)"
						d="M105.27,8.67h-.34c-.27-3.75-4.82-6.75-10.43-6.76s-10.5,3.16-10.51,7.09c0,.07.02.12.02.19-53.14,5.43-51.04,42.62-49.99,62.7.18,3.52-.07,6.98-.31,9.23,21.65,12.38,61.67,16.98,105.32,11.84,8.09-5.56,19.14-10.88,19.14-10.88,0,0,.72-20.62.05-27.45-3.53-35.87-34.19-44.19-52.96-45.95Z"
					/>
				</motion.svg>
			</motion.div>
			<motion.div
				initial={{ y: '20px', opacity: 0 }}
				whileInView={{ y: '0', opacity: 1 }}
				viewport={{ amount: 0.1, once: true }}
				transition={{ duration: 0.3 }}
				className="flex h-full w-full flex-col items-center justify-center gap-25">
				{Projects.map((project, index) => (
					<motion.div
						key={index}
						initial="rest"
						whileHover="hover"
						animate="rest"
						className={`${index % 2 === 0 ? 'items-start pl-10 sm:pl-22 lg:ml-20' : 'items-end pr-14 text-right sm:pr-22 lg:mr-20'} shadow-primary-100 hover:shadow-accent-100 pointer-events-auto relative z-0 flex h-80 w-full max-w-xl flex-col justify-end gap-2 pb-8 shadow-[0_5px_60px_0_rgba(0,0,0,.65)] duration-300 md:h-96 md:max-w-2xl lg:h-126 lg:max-w-4xl xl:max-w-5xl`}>
						<NavLink to={`/projects/${index}`}>
							<div className="from-theme-primary-100 to-theme-accent-100 absolute top-1/2 left-1/2 -z-1 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-gradient-to-r p-2">
								<img src={project.thumbnail} alt={project.name} className="h-full w-full object-cover" />
							</div>
							<motion.div variants={Scale}>
								<h3 className="text-light drop-shadow-dark z-11 text-3xl font-bold drop-shadow-md sm:text-4xl md:text-5xl">
									{project.name}
								</h3>
								<p className="text-light drop-shadow-dark z-11 font-serif text-xs italic drop-shadow-md sm:text-sm md:text-lg">
									{project.subheader}
								</p>
								<Button className="z-12 mt-4 w-fit" chevron="light">
									View Project
								</Button>
							</motion.div>
							<div className="absolute inset-0 -z-1 overflow-hidden">
								<motion.div
									variants={Hover}
									className="to-theme-primary-300 absolute inset-0 -z-1 bg-gradient-to-r from-[#040404] opacity-90"
								/>
							</div>
							<motion.div
								variants={Counter}
								className={`${index % 2 === 0 ? 'left-0 justify-end' : 'left-0 justify-start sm:-left-5 md:-left-20'} drop-shadow-dark pointer-events-auto absolute -top-5 m-0 flex w-full overflow-hidden p-0 text-[14rem] leading-none font-bold drop-shadow-md`}>
								<motion.span
									variants={CounterMask}
									className={`${index % 2 === 0 ? 'justify-end' : 'justify-start'} absolute bottom-0 left-0 flex h-full w-full bg-gradient-to-t from-white to-white [background-size:100%_0%] bg-clip-text [background-position:bottom] [background-repeat:no-repeat] text-transparent`}
									aria-hidden="true">
									0{index + 1}
								</motion.span>
								<span className="text-gray-300">0{index + 1}</span>
							</motion.div>
						</NavLink>
						<div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
							<motion.div
								initial={{ height: '100%' }}
								whileInView={{ height: '0%' }}
								viewport={{ amount: 0.8, once: true }}
								transition={{ duration: 0.5 }}
								className="from-dark to-theme-primary-300 absolute inset-0 -z-1 bg-gradient-to-r"
							/>
						</div>
					</motion.div>
				))}

				<ContactButton className="md:hidden" onClick={() => setPageState('About' as PageState)}>
					Contact Me
				</ContactButton>
			</motion.div>

			<div className="bg-theme-accent-100 absolute -z-1 hidden h-full w-0.25 opacity-10 sm:flex"></div>
		</section>
	);
}
