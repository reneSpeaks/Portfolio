import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useTheme } from '@hooks/useTheme';
import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import { BottomInfo, Hero } from '@config/projects/Animations';

export default function Main({ id }: { id: number }) {
	const { Projects } = useProject();
	const { pageState } = usePageState();
	const { setIsThemed } = useTheme();
	const Project = Projects[id];

	useEffect(() => {
		// Set variables on body
		Object.entries(Project.theme).forEach(([key, value]) => {
			document.body.style.setProperty(key, value);
		});
		document.body.style.setProperty(
			'--color-theme-next-accent',
			Projects[Project.id + 1 < Projects.length ? Project.id + 1 : 0].theme['--color-theme-accent-100']
		);
		setIsThemed(1);
		// Optionally clean up/reset on unmount
		return () => {
			Object.keys(Project.theme).forEach((key) => {
				document.body.style.removeProperty(key);
			});
			document.body.style.removeProperty('--color-theme-next-accent');
			setIsThemed(0);
		};
	}, [Project, Projects, setIsThemed]);

	return (
		<main className="text-theme sticky top-0 z-10 flex h-dvh w-full justify-center place-self-start self-center overflow-x-hidden transition-all duration-500 ease-in-out sm:p-4">
			<div className="absolute inset-0">
				{Project.headerType === 'video' ? (
					<video
						autoPlay
						loop
						muted
						playsInline
						className="pointer-events-none z-11 h-screen w-full overflow-hidden object-cover">
						<source src={Project.header} type="video/mp4" />
					</video>
				) : (
					<img src={Project.header} alt="" className="pointer-events-none z-11 h-screen w-full overflow-hidden object-cover" />
				)}
			</div>
			<motion.div
				variants={Hero}
				initial="hidden"
				animate={pageState === 'Default' ? 'visible' : 'hidden'}
				exit="exit"
				className="z-12 flex h-full w-full flex-col items-center justify-center p-4 text-center">
				<h1 className="text-theme-header text-5xl font-bold sm:text-7xl">{Project.name}</h1>
				<p className="font-serif text-2xl italic">{Project.subheader}</p>
			</motion.div>
			<motion.div
				variants={BottomInfo}
				initial="hidden"
				animate={pageState === 'Default' ? 'visible' : 'hidden'}
				exit="exit"
				className="absolute bottom-4 z-12 flex w-screen flex-col items-center justify-center md:flex-row md:gap-10">
				<p className="text-theme-header text-lg font-bold" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-bold">Role</span>&nbsp;{Project.role}
				</p>
				<p className="text-theme-header text-lg font-bold" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-bold">Context</span>&nbsp;{Project.context}
				</p>
				<p className="text-theme-header text-lg font-bold" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-bold">Period</span>&nbsp;{Project.period}
				</p>
			</motion.div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute bottom-0 z-11 h-1 w-full bg-gradient-to-l"></div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-r"></div>
		</main>
	);
}
