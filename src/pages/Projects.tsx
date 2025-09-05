import Main from '@pages/sections/projects/Main';
import Introduction from '@pages/sections/projects/Introduction';
import Analysis from '@pages/sections/projects/Analysis';
import Theme from '@pages/sections/projects/Theme';
import Contact from '@pages/sections/Contact';

import Transition from '@components/Transition';

// import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

export default function Projects() {
	// const { pageState } = usePageState();
	const { Project, ProjectData } = useProject();

	console.log(Project, ProjectData);

	return (
		<Transition>
			<Main />
			<Contact />
			<Introduction />
			<Analysis />
			<Theme />
			{/* <section
				className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light relative z-20 grid h-auto w-full grid-cols-2 items-center justify-center`}>
				<div className="h-24 border-1 border-r-0 border-[#DDDDDD]"></div>
				<button className="xs:text-xl text-theme-accent-100 h-24 border-1 border-l-0 border-[#DDDDDD] text-lg font-black sm:text-2xl md:text-3xl">
					Stay tuned for more in the Future...
				</button>
			</section> */}
		</Transition>
	);
}
