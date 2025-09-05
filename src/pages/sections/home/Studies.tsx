import { NavLink } from 'react-router';

import Button from '@components/Button';

import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import { Projects } from '@config/projects/Projects';

export default function Studies() {
	const { pageState } = usePageState();
	const { setProject } = useProject();

	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light relative z-20 flex h-auto w-full flex-col items-center justify-center py-20`}>
			<div className="mb-30 flex flex-col items-center gap-4">
				<h4 className="text-accent-100 font-serif text-xl font-semibold">SHOWCASE</h4>
				<h2 className="text-theme text-4xl font-bold">Latest Works</h2>
			</div>
			{Projects.map((project, index) => (
				<div
					key={index}
					className={`${index % 2 === 0 ? 'left-1/18 items-start pl-20' : 'right-1/18 items-end pr-20'} shadow-primary-100 hover:shadow-accent-100 pointer-events-auto relative z-0 mb-40 flex h-126 w-full max-w-4xl flex-col justify-end gap-2 overflow-hidden border-1 pb-5 shadow-2xl duration-300`}>
					<img src={project.thumbnail} alt={project.name} className="absolute inset-0 h-auto w-full object-cover" />
					<h3 className="text-light drop-shadow-primary-100 z-11 text-5xl font-bold drop-shadow-lg">{project.name}</h3>
					<p className={`text-light drop-shadow-primary-100 z-11 font-serif text-lg italic drop-shadow-lg`}>
						{project.subheader}
					</p>
					<NavLink
						to="/projects"
						onClick={() => {
							setProject(index);
							console.log(index);
							console.log(Projects[index]);
						}}>
						<Button className="z-12 mt-4 w-fit">View Project</Button>
					</NavLink>
					<div className="bottom-5 left-10 mt-10 flex flex-row gap-5">
						{project.technologies.map((tech, index) => (
							<span key={index} className="text-light drop-shadow-primary-100 z-11 font-serif text-lg italic drop-shadow-lg">
								{tech}
							</span>
						))}
					</div>
				</div>
			))}
			<div className="bg-theme-accent-100 absolute z-20 h-full w-0.25 opacity-10"></div>
			<div className="border-theme-accent-100 absolute z-20 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
