import Lottie from 'react-lottie';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router';

import Main from '@pages/sections/projects/Main';
import Introduction from '@pages/sections/projects/Introduction';
import Analysis from '@pages/sections/projects/Analysis';
import Theme from '@pages/sections/projects/Theme';
import Contact from '@pages/sections/Contact';

import Transition from '@components/Transition';

import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';

export default function Projects() {
	const { pageState } = usePageState();
	const { projectId } = useParams();
	const { Projects } = useProject();
	const [isStopped, setIsStopped] = useState(true);
	const Project = Projects[projectId ? parseInt(projectId) : 0];

	const chevronLottieOptions = {
		loop: false,
		autoplay: true,
		animationData: chevronData,
		rendererSettings: {
			fps: 60,
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<Transition>
			<Main />
			<Contact />
			<Introduction />
			<Analysis />
			<Theme />
			<NavLink
				to={`/projects/${Project.id + 1 < Projects.length ? Project.id + 1 : 0}`}
				onMouseLeave={() => setIsStopped(true)}
				onMouseEnter={() => setIsStopped(false)}
				className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} group pointer-events-auto relative z-20 flex h-auto w-full cursor-pointer flex-col items-center justify-center`}>
				<div className="flex w-full flex-row items-center justify-around py-10">
					<div className="flex flex-col gap-5">
						<span className="text-theme-next-accent group-hover:text-dark font-serif text-sm duration-300">NEXT WORK</span>
						<span className="decoration-theme-next-accent text-5xl font-bold underline decoration-2 underline-offset-4">
							{Projects[Project.id + 1 < Projects.length ? Project.id + 1 : 0].name}
						</span>
					</div>
					<div className="">
						<Lottie options={chevronLottieOptions} width={40} height={40} isStopped={isStopped} />
					</div>
				</div>
				<div className="bg-light absolute inset-0 -z-1" />
				<div className="bg-theme-next-accent absolute inset-0 top-full -z-1 duration-300 group-hover:top-0" />
			</NavLink>
		</Transition>
	);
}
