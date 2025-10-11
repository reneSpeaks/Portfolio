import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { WindowSize } from '@config/Page';
import { Pens as CodePens } from '@config/pens/Pens';
import { Scale, Counter, Line, PenMask } from '@config/pens/Animations';

export default function Pens() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= WindowSize.tablet);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= WindowSize.tablet);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section id="pens" className="relative z-20 flex h-auto w-full flex-col items-center justify-center gap-20 bg-[#f3f3f3]">
			<div className="flex flex-col gap-2 text-center">
				<h4 className="text-accent-100 font-serif text-xl font-semibold">EXPERIMENTS</h4>
				<h2 className="text-theme text-4xl font-bold">Web is fun</h2>
			</div>

			<section className="relative z-20 grid h-full w-full grid-cols-1 sm:grid-cols-2 md:block">
				{CodePens.map((pen, index) => (
					<motion.a
						href={pen.url}
						target="_blank"
						rel="noopener noreferrer"
						key={pen.title}
						className="shadow-left bg-light pointer-events-auto relative float-left clear-none flex h-85 cursor-pointer flex-col overflow-hidden md:w-1/4 lg:h-100"
						whileHover="hover"
						initial="rest">
						<figure className="z-1 h-full w-full">
							<motion.img
								variants={Scale}
								src={isMobile ? pen.img : pen.gif}
								className="border-primary-100 drop-shadow-primary-100/20 mx-auto mt-10 h-50 w-50 rounded-full object-cover drop-shadow-2xl lg:h-58 lg:w-58"
							/>
						</figure>

						<div className="z-1 flex w-full flex-row justify-between px-12 pb-5">
							<div className="flex flex-col text-sm">
								<div className="relative font-bold">
									<span className="absolute -left-5">&mdash;</span>TITLE
								</div>

								<div className="font-serif text-xs lg:line-clamp-1">{pen.title}</div>
							</div>

							<div className="relative hidden lg:block">
								<motion.span variants={Counter} className="text-primary-100 absolute -top-6 rotate-90 font-serif text-xs">
									0{index + 1}
								</motion.span>
								<motion.span variants={Line} className="bg-primary-100 absolute bottom-0 left-1.5 h-[80%] w-0.5" />
							</div>
						</div>

						<div className="text-accent-200/20 absolute -top-3 -right-6 block text-[12rem] leading-none font-bold lg:hidden">
							0{index + 1}
						</div>
						<motion.div variants={PenMask} className="bg-accent-300 absolute inset-0 w-0" />
					</motion.a>
				))}
				<div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
					<motion.div
						initial={isMobile ? { height: '0%' } : { height: '100%' }}
						whileInView={{ height: '0%' }}
						viewport={{ amount: 0.6, once: true }}
						transition={{ duration: 0.5 }}
						className="bg-primary-100 absolute inset-0 z-20"
					/>
				</div>
			</section>

			<div className="absolute top-0 left-1/2 -z-1 h-full w-full max-w-7xl -translate-x-1/2 border-x-2 border-[#EDEDED]" />
			<div className="bg-theme-accent-100 absolute -z-1 hidden h-full w-0.25 opacity-10 sm:flex"></div>
		</section>
	);
}
