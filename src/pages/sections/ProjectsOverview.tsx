import { usePageState } from '@hooks/usePageState';
import { motion } from 'framer-motion';

import { Backdrop, CloseButton, Container, FlyFromLeft, FlyFromRight, CounterLeft, CounterRight } from '@config/works/Animations';
import { Projects } from '@config/projects/Projects';
import ReactMarkdown from 'react-markdown';
import Button from '@components/Button';
import { NavLink } from 'react-router';
import { useEffect } from 'react';

export default function ProjectsOverview() {
	const { pageState, setPageState } = usePageState();

	useEffect(() => {
		if (pageState === 'Works') {
			document.body.classList.add('no-scroll');
		} else if (pageState === 'About') {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, [pageState]);

	return (
		<>
			<motion.div
				initial="hidden"
				animate={pageState === 'Works' ? 'visible' : 'hidden'}
				exit="hidden"
				variants={Backdrop}
				className="bg-dark fixed top-0 left-0 z-50 h-screen w-screen opacity-75 duration-500"
			/>
			<motion.section
				initial="hidden"
				animate={pageState === 'Works' ? 'visible' : 'hidden'}
				exit="hidden"
				variants={Container}
				className="scrollbar-hide pointer-events-auto fixed top-1/2 left-1/2 z-51 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col overflow-x-hidden overflow-y-scroll">
				<div className="my-30 flex w-full max-w-7xl flex-col items-center gap-20 self-center">
					{Projects.map((project, index) => (
						<div key={index} className="drop-shadow-theme-accent-100 grid h-130 w-[80%] drop-shadow-2xl md:grid-cols-12">
							{index % 2 === 0 ? (
								<>
									<motion.div
										initial="hidden"
										animate={pageState === 'Works' ? 'visible' : 'hidden'}
										exit="hidden"
										variants={FlyFromLeft}
										className="drop-shadow-dark relative z-1 hidden items-end justify-end drop-shadow-[0px_20px_80px_rgba(0,0,0,0.55)]/55 md:col-span-5 md:flex">
										<motion.span
											variants={CounterLeft}
											className="text-light drop-shadow-dark mx-10 text-[14rem] leading-none font-bold drop-shadow-md">
											0{index + 1}
										</motion.span>
										<img
											src={project.thumbnail}
											alt={project.name}
											className="absolute inset-0 -z-1 h-full w-full object-cover"
										/>
									</motion.div>
									<motion.div
										initial="hidden"
										animate={pageState === 'Works' ? 'visible' : 'hidden'}
										exit="hidden"
										variants={FlyFromRight}
										className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#e6e6e6] p-10 sm:p-16 md:col-span-7">
										<header>
											<h2 className="text-theme-primary-100 mb-2 place-self-center text-center text-4xl font-bold md:text-5xl lg:text-7xl">
												{project.name}
											</h2>
											<p className="text-theme-primary-100 text-center text-sm font-semibold uppercase opacity-60 sm:text-base">
												{project.role} - {project.period}
											</p>
										</header>
										<main className="text-dark/80 line-clamp-4 text-justify">
											<ReactMarkdown>{project.description}</ReactMarkdown>
										</main>
										<NavLink to={`/projects/${index}`} onClick={() => setPageState('Default')}>
											<Button className="z-1">View Project</Button>
										</NavLink>

										<div className="absolute -bottom-10 left-10 -z-0">
											<img src={project.logo} className="h-35 object-contain opacity-10" />
										</div>
									</motion.div>
								</>
							) : (
								<>
									<motion.div
										initial="hidden"
										animate={pageState === 'Works' ? 'visible' : 'hidden'}
										exit="hidden"
										variants={FlyFromLeft}
										className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#e6e6e6] p-10 sm:p-16 md:col-span-7">
										<header>
											<h2 className="text-theme-primary-100 mb-2 place-self-center text-center text-4xl font-bold md:text-5xl lg:text-7xl">
												{project.name}
											</h2>
											<p className="text-theme-primary-100 text-center text-sm font-semibold uppercase opacity-60 sm:text-base">
												{project.role} - {project.period}
											</p>
										</header>
										<main className="text-dark/80 line-clamp-4 text-justify">
											<ReactMarkdown>{project.description}</ReactMarkdown>
										</main>
										<NavLink to={`/projects/${index}`} onClick={() => setPageState('Default')}>
											<Button className="z-1">View Project</Button>
										</NavLink>

										<div className="absolute -bottom-10 left-10 -z-0">
											<img src={project.logo} className="h-35 object-contain opacity-10" />
										</div>
									</motion.div>
									<motion.div
										initial="hidden"
										animate={pageState === 'Works' ? 'visible' : 'hidden'}
										exit="hidden"
										variants={FlyFromRight}
										className="drop-shadow-dark relative hidden items-end justify-end drop-shadow-[0px_20px_80px_rgba(0,0,0,0.55)]/55 md:col-span-5 md:flex">
										<motion.span
											variants={CounterRight}
											className="text-light drop-shadow-dark mx-10 text-[14rem] leading-none font-bold drop-shadow-md">
											0{index + 1}
										</motion.span>
										<img
											src={project.thumbnail}
											alt={project.name}
											className="absolute inset-0 -z-1 h-full w-full object-cover"
										/>
									</motion.div>
								</>
							)}
						</div>
					))}
				</div>
			</motion.section>
			<motion.button
				initial="hidden"
				animate={pageState === 'Works' ? 'visible' : 'hidden'}
				exit="hidden"
				variants={CloseButton}
				onClick={() => setPageState('Default')}
				className="text-light from-theme-primary-100 to-theme-accent-100 shadow-dark pointer-events-auto fixed top-2 left-1/2 z-52 -translate-x-1/2 cursor-pointer bg-gradient-to-r px-8 py-3 text-xl shadow-md">
				X <span className="font-bold">Close</span>
			</motion.button>
		</>
	);
}
