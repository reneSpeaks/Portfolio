import { useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router';
import { usePageState } from '@hooks/usePageState';
import { Projects } from '@config/projects/Projects';
import type { PageState } from '@config/Page';
import chevronData from '@assets/layout/animation/lotties/chevron-right.json';

export default function Studies() {
	const { pageState, setPageState } = usePageState();
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

	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light relative z-20 flex h-auto w-full flex-col items-center justify-center py-20`}>
			<div className="mb-30 flex flex-col items-center gap-4">
				<h4 className="text-accent-100 font-serif text-xl font-bold">A showcase of my recent projects</h4>
				<h2 className="text-theme text-4xl font-[1000]">Latest Works</h2>
			</div>
			{Projects.map((project, index) => (
				<div
					key={index}
					className={`${index % 2 === 0 ? 'left-1/18' : 'right-1/18'} group shadow-primary-100 hover:shadow-accent-100 pointer-events-auto relative z-0 mb-40 flex h-126 w-full max-w-4xl flex-col justify-end gap-2 overflow-hidden border-1 pb-20 pl-20 shadow-2xl duration-300`}>
					<img src={project.thumbnail} alt={project.name} className="absolute inset-0 h-auto w-full object-cover" />
					<h3 className="text-light drop-shadow-primary-100 z-11 text-5xl font-[1000] drop-shadow-lg">{project.name}</h3>
					<p className={`text-light drop-shadow-primary-100 z-11 font-serif text-lg italic drop-shadow-lg`}>
						{project.subheader}
					</p>
					<Link
						to={project.demo}
						onClick={() => setPageState('Default' as PageState)}
						onMouseEnter={() => setIsStopped(false)}
						onMouseLeave={() => setIsStopped(true)}
						className="group button bg-primary-100 text-light drop-shadow-dark hover:bg-primary-300 pointer-events-auto relative z-12 mt-4 w-fit cursor-pointer px-8 py-3 text-lg font-bold tracking-widest drop-shadow-lg duration-300 ease-in-out">
						<span className="z-12">View Project</span>
						<div className="absolute top-1/2 left-45 -translate-y-1/2 cursor-pointer">
							<Lottie options={defaultLottieOptions} height={40} width={40} isStopped={isStopped} />
						</div>
						<div className="button-mask" />
					</Link>
					<div className="absolute bottom-5 left-10 flex flex-row gap-5">
						{project.technologies.map((tech, index) => (
							<span key={index} className="text-light drop-shadow-primary-100 z-11 font-serif text-lg italic drop-shadow-lg">
								{tech}
							</span>
						))}
					</div>
					<div className="border-theme absolute inset-0 z-10 h-full w-full border-8" />
					<div className="bg-dark pointer-events-none absolute inset-0 z-1 h-full w-full opacity-20" />
					<div className="from-primary-300 transition-width absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-tr from-10% to-transparent to-100% opacity-0 duration-300 ease-in group-hover:opacity-100" />
				</div>
			))}
			<div className="bg-theme-accent-100 absolute z-20 h-full w-0.25 opacity-10"></div>
			<div className="border-theme-accent-100 absolute z-20 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
