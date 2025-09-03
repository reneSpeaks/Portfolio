import { useState } from 'react';
import Lottie from 'react-lottie';

import { usePageState } from '@hooks/usePageState';

import type { PageState } from '@config/Page';
import type { Projects } from '@config/projects/Projects';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';

export default function Theme({ Project }: { Project: Projects[number] }) {
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
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light relative z-20 flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden py-10`}>
			<div className="grid w-full max-w-7xl grid-cols-2 justify-between gap-10 px-5 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap">
				{Project.colors.map((color) => (
					<div key={color.name} className="z-21 flex flex-col items-center gap-4">
						<div className="h-32 w-32 rounded-full border-1 border-[#AAAAAA]" style={{ backgroundColor: color.hex }}></div>
						<span className="font-serif font-bold">{color.name}</span>
					</div>
				))}
			</div>

			<button
				onClick={() => setPageState('About' as PageState)}
				onMouseEnter={() => setIsStopped(false)}
				onMouseLeave={() => setIsStopped(true)}
				className="group button bg-theme-accent-100 text-light hover:bg-theme-primary-100 shadow-theme-primary-100 pointer-events-auto relative z-12 mt-8 w-fit cursor-pointer px-8 py-3 text-lg font-bold tracking-widest shadow-md duration-300 ease-in-out">
				<span className="z-12">Contact Me</span>
				<div className="absolute top-1/2 left-45 -translate-y-1/2 cursor-pointer">
					<Lottie options={defaultLottieOptions} height={40} width={40} isStopped={isStopped} />
				</div>
				<div className="button-mask"></div>
			</button>
			<div className="border-dark absolute z-10 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
