import ReactMarkdown from 'react-markdown';

import { usePageState } from '@hooks/usePageState';

import type { Projects } from '@config/projects/Projects';

export default function Analysis({ Project }: { Project: Projects[number] }) {
	const { pageState } = usePageState();

	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-light relative z-20 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-15`}>
			<h5 className="text-theme text-5xl font-black">Analysis & Insights</h5>
			<div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
				<div className="z-11 flex max-w-3xl flex-col gap-4 p-6">
					<ReactMarkdown
						components={{
							h4: ({ children }) => (
								<h4 className="relative text-3xl font-black">
									{children}
									<div className="bg-theme absolute -bottom-1 h-0.75 w-2/3"></div>
								</h4>
							),
							strong: ({ children }) => <strong className="text-theme">{children}</strong>
						}}>
						{Project.insights}
					</ReactMarkdown>
				</div>
				<div className="z-11">
					<img src={Project.mockup} alt="" className="drop-shadow-theme p-5 drop-shadow-sm lg:max-w-150" />
				</div>
			</div>
			<div className="border-dark absolute z-10 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
