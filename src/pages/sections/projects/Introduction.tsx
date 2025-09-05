import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import Button from '@components/Button';

export default function Introduction() {
	const { ProjectData } = useProject();
	const { pageState } = usePageState();

	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-theme relative z-20 flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden border-b-1 border-b-[#999999] py-24`}>
			<h1 className="text-4xl font-black md:text-5xl">Introduction</h1>
			<span className="max-w-6xl p-5 text-justify text-lg">
				<ReactMarkdown>{ProjectData.description}</ReactMarkdown>
			</span>
			<Link to={ProjectData.demo} target="_blank" className="z-12 mt-8 w-fit">
				<Button>Visit Website</Button>
			</Link>
			<div className="absolute -bottom-0 left-1/3 overflow-hidden opacity-20 md:left-1/2">
				<img src={ProjectData.logo} alt={ProjectData.name} className="pointer-events-none w-170 min-w-120" />
			</div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-l"></div>
		</section>
	);
}
