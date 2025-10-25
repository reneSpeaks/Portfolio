import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

import { useProject } from '@hooks/useProject';

import Button from '@components/Button';

export default function Introduction({ id }: { id: number }) {
	const { Projects } = useProject();

	const Project = Projects[id];

	return (
		<section className="bg-theme-primary-100 text-light relative z-20 flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden border-b-1 border-b-[#999999] py-24">
			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
				className="text-4xl font-bold md:text-5xl">
				Introduction
			</motion.h1>
			<motion.span
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
				className="max-w-6xl p-5 text-justify text-lg">
				<ReactMarkdown
					components={{
						strong: ({ children }) => <strong className="text-theme-accent-100">{children}</strong>
					}}>
					{Project.description}
				</ReactMarkdown>
			</motion.span>
			<Link to={Project.demo} target="_blank" className="z-12 mt-8 w-fit">
				<Button mode="light">Visit Website</Button>
			</Link>
			<div className="absolute -bottom-30 left-[6%] overflow-hidden text-[13rem] font-bold text-nowrap opacity-10">
				{Project.introductionBackground}
			</div>
			<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 z-11 h-1 w-full bg-gradient-to-l"></div>
		</section>
	);
}
