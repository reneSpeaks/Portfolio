import { useEffect } from 'react';

import { useTheme } from '@hooks/useTheme';
import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

export default function Main() {
	const { ProjectData } = useProject();
	const { pageState } = usePageState();
	const { setIsThemed } = useTheme();
	const projectTheme = ProjectData.theme;

	useEffect(() => {
		// Set variables on body
		Object.entries(projectTheme).forEach(([key, value]) => {
			document.body.style.setProperty(key, value);
		});
		setIsThemed(1);
		// Optionally clean up/reset on unmount
		return () => {
			Object.keys(projectTheme).forEach((key) => {
				document.body.style.removeProperty(key);
			});
			setIsThemed(0);
		};
	}, [projectTheme, setIsThemed]);

	return (
		<main className="text-theme sticky top-0 z-10 flex h-dvh w-full justify-center place-self-start self-center overflow-x-hidden transition-all duration-500 ease-in-out sm:p-4">
			<div
				className={`${pageState === 'About' ? 'opacity-90' : 'opacity-0'} bg-dark absolute inset-0 top-0 right-0 bottom-0 left-0 z-50 duration-300`}
			/>
			<div className="absolute inset-0">
				<video autoPlay loop muted playsInline className="pointer-events-none z-11 h-screen w-full overflow-hidden object-cover">
					<source src={ProjectData.header} type="video/mp4" />
				</video>
			</div>
			<div className="z-12 flex h-full w-full flex-col items-center justify-center p-4 text-center">
				<h1 className="text-theme-header text-5xl font-black sm:text-7xl">{ProjectData.name}</h1>
				<p className="font-serif text-2xl italic">{ProjectData.subheader}</p>
			</div>
			<div className="absolute bottom-4 z-12 flex w-screen flex-col items-center justify-center md:flex-row md:gap-10">
				<p className="text-theme-header text-lg font-black capitalize" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-black">Role</span>&nbsp;{ProjectData.role}
				</p>
				<p className="text-theme-header text-lg font-black capitalize" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-black">Context</span>&nbsp;{ProjectData.context}
				</p>
				<p className="text-theme-header text-lg font-black capitalize" style={{ wordSpacing: '0.25rem' }}>
					<span className="text-theme font-black">Period</span>&nbsp;{ProjectData.period}
				</p>
			</div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute bottom-0 z-11 h-1 w-full bg-gradient-to-l"></div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-r"></div>
		</main>
	);
}
