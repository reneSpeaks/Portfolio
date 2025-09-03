import { useState } from 'react';
import { Link } from 'react-router';
import Lottie from 'react-lottie';
import ReactMarkdown from 'react-markdown';

import { usePageState } from '@hooks/usePageState';

import type { Projects } from '@config/projects/Projects';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';

export default function Introduction({ Project }: { Project: Projects[number] }) {
	const { pageState } = usePageState();
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
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-theme relative z-20 flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden border-b-1 border-b-[#999999] py-24`}>
			<h1 className="text-4xl font-black md:text-5xl">Introduction</h1>
			<span className="max-w-6xl p-5 text-justify text-lg">
				<ReactMarkdown>{Project.description}</ReactMarkdown>
			</span>
			<Link
				to={Project.demo}
				target="_blank"
				onMouseEnter={() => setIsStopped(false)}
				onMouseLeave={() => setIsStopped(true)}
				className="group text-light border-theme shadow-theme pointer-events-auto relative z-12 mt-8 w-fit cursor-pointer border-2 bg-[#181818] px-8 py-3 text-lg font-bold tracking-widest shadow-md duration-300 ease-in-out hover:border-[#181818] hover:bg-transparent">
				<span className="z-12">Visit Website</span>
				<div className="absolute top-1/2 left-48 -translate-y-1/2 cursor-pointer">
					<Lottie options={defaultLottieOptions} height={40} width={40} isStopped={isStopped} />
				</div>
				<div className="button-mask"></div>
			</Link>
			<div className="absolute -bottom-0 left-1/3 overflow-hidden opacity-20 md:left-1/2">
				<img src={Project.logo} alt={Project.name} className="pointer-events-none w-170 min-w-120" />
			</div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-l"></div>
		</section>
	);
}
