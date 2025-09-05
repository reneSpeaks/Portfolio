import Main from '@pages/sections/projects/Main';
import Introduction from '@pages/sections/projects/Introduction';
import Analysis from '@pages/sections/projects/Analysis';
import Theme from '@pages/sections/projects/Theme';
import Contact from '@pages/sections/Contact';

import Transition from '@components/Transition';

import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

export default function Projects() {
	const { pageState } = usePageState();
	const { Project, Projects } = useProject();

	console.log(Projects);

	return (
		<Transition>
			<Main />
			<Contact />
			<Introduction />
			<Analysis />
			<Theme />
			<section
				className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light group pointer-events-auto relative z-20 flex h-auto w-full flex-col items-center justify-center`}>
				<div className="flex w-full flex-row items-center justify-around py-8">
					<div className="flex flex-col gap-4">
						<span className="text-theme-accent-100 font-serif text-sm">NEXT WORK</span>
						<span className="decoration-theme-accent-100 text-5xl font-[1000] underline decoration-2 underline-offset-4">
							{Projects[Project + 1 < Projects.length ? Project + 1 : 0].name}
						</span>
					</div>
					<div className="">ARROW</div>
				</div>
			</section>
		</Transition>
	);
}
