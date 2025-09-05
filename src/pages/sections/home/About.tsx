import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';

import { useDotCount } from '@hooks/useDotCount';
import { useMobile } from '@hooks/useMobile';

import { Skills, SkillCarousel } from '@config/Skills';
import { type Duration } from '@config/about/Types';

import ProfilePicture from '@assets/layout/Event.png';

export default function About() {
	const { isMobile } = useMobile();
	const dotCount = useDotCount();
	const yTranslation = useMotionValue(0);
	const duration: Duration = { Fast: 35, Slow: 80 };

	const [currentDuration, setCurrentDuration] = useState(duration.Fast);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		// Final Position adjusted by Icon (w-14 56px), gap-8 (32px) and offset (18px)
		const finalPosition = (0 - SkillCarousel.length * 56 * 2 - (SkillCarousel.length * 32 * 2 - 32)) / 2 - 18;
		let controls;

		if (mustFinish) {
			controls = animate(yTranslation, [yTranslation.get(), finalPosition], {
				ease: 'linear',
				duration: currentDuration * (1 - yTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				}
			});
		} else {
			controls = animate(yTranslation, [0, finalPosition], {
				ease: 'linear',
				duration: currentDuration,
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0
			});
		}
		return controls?.stop;
	}, [yTranslation, currentDuration, rerender, mustFinish]);

	return (
		<section id="about" className="bg-theme-primary-100 relative z-20 flex h-auto w-full items-center justify-center py-20">
			<div className="bg-light shadow-dark relative z-21 flex h-11/12 w-11/12 max-w-7xl flex-col shadow-lg md:grid md:grid-cols-2 md:grid-rows-1">
				<div className="md:from-light relative flex h-full w-full flex-col justify-center gap-10 py-[15%] pl-[15%] md:col-start-1 md:bg-gradient-to-r md:from-80% md:to-[#AAAAAA] md:to-100%">
					<div className="flex flex-col gap-4 pr-[10%]">
						<h2 className="text-primary-100 text-lg font-black">
							<span className="text-xs">01</span> About Me
						</h2>
						<p className="text-justify">
							I'm René, a German guy living near <strong className="text-accent-100">Berlin</strong>, where I work as{' '}
							<strong className="text-accent-100">Web Developer</strong>. I used to work with Music and Voiceover producing
							Audio for Advertisements but have since pivoted back into development, my real passion.
						</p>
						<p className="text-justify">
							If there is one thing I love, it is the creative process of{' '}
							<strong className="text-accent-100">building and designing</strong> everywhere I go. If late at night during
							long hours with friends, writing immersive stories, or creating components for that project that just needs a{' '}
							<i>little bit of extra love</i>, I'm always all in.
						</p>
					</div>
					<div className="pointer-events-auto flex flex-col gap-4 pr-[10%]">
						<h2 className="text-primary-100 text-lg font-black">
							<span className="text-xs">02</span> Achievements
						</h2>
						<p className="text-justify">
							In November 2024 I <u>won</u>{' '}
							<a
								href="https://www.linkedin.com/posts/wbs-coding-school_wbscodingschool-stackfuel-docmorris-activity-7268275100158734338-BoQW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGh3rcBrmsqPjn710ZtpfwsJpmBiUzLS0A"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-accent-100 text-primary-100 cursor-pointer font-bold duration-300 hover:underline">
								Battle of the Bootcamps
							</a>
							, designing with my team a full-stack web application prototype under the theme of{' '}
							<strong className="text-accent-100">"Innovation and Sustainable Future"</strong>. I was afterward given the
							opportunity to work alongside DocMorris, who sponsored the event, and <u>learn</u> from their experienced team.
						</p>
					</div>

					<img
						src={ProfilePicture}
						alt="Background"
						className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover opacity-15"
					/>
				</div>
				<div className="relative flex h-full w-full flex-col justify-center overflow-hidden py-[15%] pr-[5%] pl-[10%] md:col-start-2 md:pr-[15%]">
					<div className="flex flex-col gap-4 px-10">
						<h2 className="text-primary-100 text-lg font-black">
							<span className="text-xs">03</span> Skills
						</h2>
						{Skills.map((skill, index) => (
							<div key={index} className="mb-3.5 flex flex-col gap-1.5">
								<span className="text-primary-100 text-sm font-black uppercase">{skill.name}</span>
								<div className="flex items-center gap-2">
									{[...Array<number>(dotCount)].map((_, index) => (
										<span
											key={index}
											className={`bg-primary-100 h-1.5 w-1.5 rounded-full ${index < Math.round((skill.level / 10) * dotCount) ? '' : 'opacity-20'}`}
										/>
									))}
									<span className="pl-3 text-sm text-gray-500">{skill.level * 10}%</span>
								</div>
							</div>
						))}
						<span className="text-primary-100 text-sm font-black">and so much more...</span>

						<motion.div
							className={`text-primary-100 pointer-events-auto absolute top-0 right-0 mr-[10%] h-full flex-col gap-8 ${isMobile ? 'hidden' : 'flex'}`}
							style={{ y: yTranslation }}
							onHoverStart={() => {
								setMustFinish(true);
								setCurrentDuration(duration.Slow);
							}}
							onHoverEnd={() => {
								setMustFinish(true);
								setCurrentDuration(duration.Fast);
							}}>
							{[...SkillCarousel, ...SkillCarousel].map((skill, index) => (
								<div
									key={index}
									className="flex cursor-pointer flex-col items-center opacity-20 transition-opacity duration-300 hover:opacity-80">
									{skill.icon}
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
			<div className="bg-theme-accent-100 absolute z-20 h-full w-0.25 opacity-10"></div>
			<div className="border-theme-accent-100 absolute z-20 h-full w-[80%] max-w-6xl border-x-2 opacity-10"></div>
		</section>
	);
}
