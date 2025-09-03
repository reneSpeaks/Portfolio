import { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

import Burger from '@components/Burger';
import AnimatedIcon from '@components/AnimatedIcon';

import { useDimensions } from '@hooks/useDimensions';
import { useMobile } from '@hooks/useMobile';
import { usePageState } from '@hooks/usePageState';
import { useScrolled } from '@hooks/useScrolled';
import { useTheme } from '@hooks/useTheme';

import { Navigation } from '@config/Navigation';
import { WindowSize } from '@config/Page';
import { BusinessLinks } from '@config/Business';
import { NavigationStagger, SideNavigation, Item, Divider, Header } from '@config/nav/Animations';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile, setIsMobile } = useMobile();
	const { pageState, setPageState } = usePageState();
	const navigationRef = useRef<HTMLDivElement>(null);
	const navigationHeight = useDimensions(navigationRef);
	const burgerRef = useRef<HTMLButtonElement>(null);
	const scrolled = useScrolled(300);
	const { isThemed } = useTheme();

	const handleResize = useCallback(() => {
		if (window.innerWidth < WindowSize.mobile) {
			setIsMobile(() => true);
		} else {
			setIsMobile(false);
			setIsOpen(false); // Reset active state when switching to desktop view
		}
	}, [setIsMobile]);

	const handleNavigationClick = useCallback(
		(event: MouseEvent) => {
			if (!navigationRef.current?.contains(event.target as Node) && isOpen && !burgerRef.current?.contains(event.target as Node)) {
				setIsOpen(() => false);
			} else if (!navigationRef.current?.contains(event.target as Node) && burgerRef.current?.contains(event.target as Node)) {
				setIsOpen((prev) => {
					return !prev;
				});
			}
		},
		[isOpen]
	);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	useEffect(() => {
		window.addEventListener('mousedown', handleNavigationClick);
		return () => {
			window.removeEventListener('mousedown', handleNavigationClick);
		};
	}, [handleNavigationClick]);

	return (
		<header>
			<div
				className={
					isOpen
						? 'pointer-events-auto fixed top-0 left-0 z-40 h-dvh w-[240px]'
						: 'pointer-events-none fixed top-0 left-0 z-40 h-dvh w-lg'
				}>
				<motion.nav initial={false} custom={navigationHeight} ref={navigationRef} className="h-full w-[240px]">
					<motion.div
						variants={SideNavigation}
						animate={isOpen ? 'open' : 'closed'}
						className="from-theme-primary-100 to-theme-primary-300 absolute top-0 bottom-0 left-0 w-[240px] bg-gradient-to-br opacity-95"
					/>
					<motion.ul
						variants={NavigationStagger}
						initial="closed"
						animate={isOpen ? 'open' : 'closed'}
						exit="closed"
						className="relative mt-32 flex w-[240px] flex-col items-center gap-8 p-4">
						{Navigation.map((item, index) => (
							<motion.li key={index} variants={Item} className="group relative">
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive
											? 'hover:text-theme-primary-300 text-theme-accent-100 cursor-pointer text-3xl font-bold duration-300 group-hover:pl-5'
											: 'hover:text-theme-primary-300 text-light cursor-pointer text-3xl duration-300 group-hover:pl-5 group-hover:font-bold'
									}
									onClick={() => setIsOpen(false)}>
									{item.name}
								</NavLink>
								<span className="text-light pointer-events-none absolute top-2 left-0 text-3xl opacity-0 duration-300 group-hover:opacity-100">
									{item.name}
								</span>
							</motion.li>
						))}
						<motion.li variants={Item} className="group relative">
							<a
								className="hover:text-theme-primary-300 text-light cursor-pointer text-3xl duration-300 group-hover:pl-5 group-hover:font-bold"
								onClick={() => {
									setIsOpen(false);
									setPageState('About');
								}}>
								Contact
							</a>
							<span className="text-light pointer-events-none absolute top-2 left-0 text-3xl opacity-0 duration-300 group-hover:opacity-100">
								Contact
							</span>
						</motion.li>
						<motion.div
							variants={Divider}
							className="from-theme-primary-300 to-theme-accent-200 shadow-theme-accent-100 h-0.5 w-11/12 bg-gradient-to-r opacity-0 shadow-lg"></motion.div>
						<div className="flex flex-row gap-6">
							{BusinessLinks.map((item, index) => (
								<motion.li key={index} variants={Item} className="group flex flex-col" title={item.name}>
									<a href={item.url} target="_blank" className="cursor-pointer" onClick={() => setIsOpen(false)}>
										<AnimatedIcon width={40} height={40} animationData={item.animationLightData} />
									</a>
									<span className="text-light pointer-events-none text-center text-xs opacity-0 duration-300 group-hover:opacity-100">
										{item.name}
									</span>
								</motion.li>
							))}
						</div>
					</motion.ul>
				</motion.nav>
			</div>
			<motion.nav
				variants={Header}
				initial="hidden"
				animate={(pageState === 'Default' && !scrolled) || isMobile ? 'visible' : 'hidden'}
				exit="exit"
				className={
					isMobile
						? 'fixed top-0 left-0 z-40 h-10 w-10 py-5 pl-7'
						: 'fixed top-0 left-0 z-40 flex w-full items-center justify-center py-0 pl-7'
				}>
				{/* Burger */}
				<Burger isOpen={isOpen} burgerRef={burgerRef} />

				{/* Logo */}
				<span className={`${isMobile ? 'pointer-events-none opacity-0' : 'z-40'}`} onClick={() => setPageState('Intro')}>
					<NavLink to="/" className="cursor-pointer" aria-label="Navigate to Home">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							key={isThemed}
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="h-16 w-16"
							viewBox="0 0 256 256">
							<defs>
								<clipPath id="navclippath">
									<path
										d="M251.44,235.04h-40l-.5-.4-102.5-89.7,1.8-1.6,34.8-31,12.2-10.4c3.9-3.2,7.4-6.2,7.8-6.8,4.8-5.8,7.3-12.8,7.3-20.4,0-17.6-14.3-31.9-31.9-31.9H30.86L5.14,16.24l140.4-.1-.2.2c29.9,2.5,53.6,27.9,53.6,58.3,0,13.4-4.8,26.7-13.5,37.2-.5.6-2.3,2.3-2.6,2.6s-1.1,1-1.1,1l-.5.4-32.9,28.8,103.1,90.4Z"
										fill="none"
									/>
								</clipPath>
								<linearGradient
									id="nav-gradient"
									x1="-156.53"
									y1="-98.24"
									x2="115.46"
									y2="-98.24"
									gradientTransform="translate(156 235)"
									gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="var(--color-theme-primary-100)" />
									<stop offset="1" stopColor="var(--color-theme-accent-100)" />
								</linearGradient>
								<clipPath id="navclippath-1">
									<polygon
										points="54.9 147.2 134.9 77.2 101.4 77.2 21.4 147.2 122 235.3 155.5 235.3 54.9 147.2"
										fill="none"
									/>
								</clipPath>
								<linearGradient
									id="nav-gradient1"
									x1="-169.6"
									y1="-77.19"
									x2="21.81"
									y2="-77.19"
									gradientTransform="translate(156 235)"
									gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="var(--color-theme-primary-100)" />
									<stop offset="1" stopColor="var(--color-theme-accent-100)" />
								</linearGradient>
							</defs>
							<g clipPath="url(#navclippath)">
								<motion.path
									d="M-.5,29.8l126.8-.1c29.9,2.5,57.4,17,57.4,47.4,0,13.4-4.3,24.4-17.4,37.2-.5.6-2.3,2.3-2.6,2.6-.3.3-1.1,1-1.1,1l-.5.4-32.9,28.8,118.9,105.6"
									fill="none"
									stroke="url(#nav-gradient)"
									strokeDasharray="461 463"
									strokeMiterlimit="10"
									strokeWidth="70.34"
									initial={{ strokeDashoffset: 463 }}
									animate={{ strokeDashoffset: pageState === 'Intro' ? 463 : 0 }}
									transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.2 }}
								/>
							</g>
							<g clipPath="url(#navclippath-1)">
								<motion.path
									d="M154.6,249.8l-116.8-102.6c8.3-8.3,91.4-81.4,91.4-81.4"
									fill="none"
									stroke="url(#nav-gradient1)"
									strokeDasharray="278 280"
									strokeMiterlimit="10"
									strokeWidth="70.34"
									initial={{ strokeDashoffset: 280 }}
									animate={{ strokeDashoffset: pageState === 'Intro' ? 280 : 0 }}
									transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.5 }}
								/>
							</g>
						</svg>
					</NavLink>
				</span>

				<ul className={isMobile ? 'hidden' : 'menu flex w-full max-w-7xl flex-row justify-end gap-10 p-7 text-2xl font-black'}>
					{Navigation.map((item, index) => (
						<li key={index} className="relative">
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive
										? 'text-theme-accent-100 relative z-52 duration-300'
										: 'hover:text-theme-accent-200 text-navigation relative z-52 duration-300'
								}>
								{item.name}
							</NavLink>
						</li>
					))}
					<li>
						<a
							className="text-navigation hover:text-theme-accent-200 relative z-52 cursor-pointer duration-300"
							onClick={() => setPageState('About')}>
							Contact
						</a>
					</li>
				</ul>
			</motion.nav>
		</header>
	);
}
