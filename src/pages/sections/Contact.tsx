import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { SiCss3, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

import CloseButton from '@components/CloseButton';

import { usePageState } from '@hooks/usePageState';

import { LetsTalk, About, Shadow } from '@config/contact/Animations';
import { type PageState } from '@config/Page';
import { type Inputs } from '@config/contact/Types';

export default function Contact() {
	const { register, handleSubmit } = useForm<Inputs>();
	const { pageState, setPageState } = usePageState();

	// TODO: IMPLEMENT FORM SUBMISSION
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<motion.section
			variants={Shadow}
			initial="hidden"
			animate={pageState === 'About' ? 'visible' : 'hidden'}
			exit="exit"
			className="scrollbar-hide fixed top-1/2 left-1/2 z-51 flex h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-x-hidden overflow-y-scroll shadow-lg md:h-9/10 md:max-h-[700px] md:w-11/12 md:flex-row-reverse md:overflow-hidden">
			<motion.div
				variants={LetsTalk}
				initial="hidden"
				animate={pageState === 'About' ? 'visible' : 'hidden'}
				exit="exit"
				className="bg-theme-primary-100 text-light relative flex h-fit w-full justify-center py-10 md:absolute md:top-0 md:right-0 md:h-full md:w-1/2 md:pt-43 md:pb-0">
				<div className="flex w-7/10 flex-col">
					<h3 className="text-3xl font-extrabold">Let's Talk.</h3>
					<span className="text-md mt-1">
						<i>New projects. freelance inquiries or even a coffee.</i>
					</span>
					<form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="z-59 mt-5 flex flex-col gap-4">
						<label htmlFor="name">Name *</label>
						<input
							type="text"
							id="name"
							className="border-theme-accent-100 focus:border-theme-accent-200 border-b-2 px-2 focus-visible:outline-none"
							required
							{...register('name', { required: true })}
						/>
						<label htmlFor="email">Email *</label>
						<input
							type="email"
							id="email"
							className="border-theme-accent-100 focus:border-theme-accent-200 border-b-2 px-2 focus-visible:outline-none"
							required
							{...register('email', { required: true })}
						/>
						<label htmlFor="message">Message *</label>
						<textarea
							id="message"
							className="border-theme-accent-100 focus:border-theme-accent-200 min-h-25 border-b-2 px-2 focus-visible:outline-none"
							required
							{...register('message', { required: true })}
						/>
						<button
							className="bg-theme-accent-100 text-light hover:bg-theme-accent-200 active:bg-theme-primary-200 cursor-pointer px-4 py-2"
							type="submit">
							Send Message
						</button>
					</form>
				</div>
				<span className="pointer-events-none absolute -right-56 -bottom-2 text-[16rem] leading-none font-bold opacity-10">
					Contact
				</span>
			</motion.div>

			<motion.div
				variants={About}
				initial="hidden"
				animate={pageState === 'About' ? 'visible' : 'hidden'}
				exit="exit"
				className="bg-light text-theme-primary-100 relative flex h-fit w-full justify-center py-10 md:absolute md:top-0 md:left-0 md:h-full md:w-1/2 md:pt-43 md:pb-0">
				<div className="flex w-7/10 flex-col">
					<h3 className="text-3xl font-extrabold">About Me.</h3>
					<span className="text-md mt-1">
						<i>Interactive Full Stack Web Developer</i>
					</span>
					<p className="mt-5 text-justify">
						I'm René Weiberlenn, a German <strong className="text-theme-accent-100">Full Stack Web Developer</strong>. I'm a guy
						who likes being creative and challenges himself with web-technologies both{' '}
						<strong className="text-theme-accent-100">Front</strong> and{' '}
						<strong className="text-theme-accent-100">Back-end</strong>.
						<br />I like to <strong className="text-theme-accent-100">solve</strong> problems,{' '}
						<strong className="text-theme-accent-100">create</strong> smart solutions and{' '}
						<strong className="text-theme-accent-100">develop</strong> my skills all while focusing on your{' '}
						<strong className="text-theme-accent-100">user experience</strong>.
						<br />
						When not working with code or playing around with designs, I enjoy creating rich fantasy worlds for my friends to
						enjoy. And, I'm <strong className="text-theme-accent-100">for hire</strong> :).
						<br />
					</p>
					<div className="flex w-full flex-row flex-wrap justify-between gap-2 pt-5 text-2xl lg:text-5xl">
						<div className="group flex flex-col items-center gap-2">
							<SiReact className="group-hover:text-accent-100 duration-300" />
							<span className="text-sm leading-none font-bold opacity-0 duration-300 group-hover:opacity-100 lg:text-lg">
								React.js
							</span>
						</div>
						<div className="group relative flex flex-col items-center gap-2">
							<svg className="h-7 w-7 lg:h-12 lg:w-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="duration-300 group-hover:stroke-green-500"
									d="M20.486 7.51389C19.3728 6.39795 18.0501 5.51302 16.5937 4.90996C15.1374 4.30691 13.5763 3.99763 12 3.99989C10.4238 3.99763 8.86265 4.30691 7.40633 4.90996C5.95001 5.51302 4.62724 6.39795 3.51404 7.51389"
									stroke="black"
									strokeWidth="3"
								/>
								<path
									className="duration-300 group-hover:stroke-green-500"
									d="M7.75803 11.7579C8.31439 11.1998 8.97557 10.7572 9.70356 10.4555C10.4316 10.1538 11.212 9.99896 12 9.99988C12.7881 9.99896 13.5685 10.1538 14.2965 10.4555C15.0245 10.7572 15.6857 11.1998 16.242 11.7579"
									stroke="black"
									strokeWidth="3"
								/>
								<path
									className="duration-300 group-hover:stroke-green-500"
									d="M32 39.9999H24M24 39.9999H8.00003L4.00003 27.9999H20L24 39.9999Z"
									stroke="black"
									strokeWidth="3"
								/>
								<path
									className="duration-300 group-hover:stroke-green-500"
									d="M39 16.9999C39 18.8564 38.2625 20.6369 36.9498 21.9496C35.637 23.2624 33.8565 23.9999 32 23.9999C30.1435 23.9999 28.363 23.2624 27.0503 21.9496C25.7375 20.6369 25 18.8564 25 16.9999C25 15.1434 25.7375 13.3629 27.0503 12.0501C28.363 10.7374 30.1435 9.99988 32 9.99988C33.8565 9.99988 35.637 10.7374 36.9498 12.0501C38.2625 13.3629 39 15.1434 39 16.9999Z"
									stroke="black"
									strokeWidth="3"
								/>
								<path
									className="duration-300 group-hover:stroke-green-500"
									d="M36 40H44V32.694C40.2503 30.9143 36.1507 29.9939 32 30C29.94 30 27.932 30.222 26 30.644"
									stroke="black"
									strokeWidth="3"
								/>
							</svg>
							<span className="text-sm leading-none font-bold opacity-0 duration-300 group-hover:opacity-100 lg:text-lg">
								User first.
							</span>
						</div>
						<div className="group flex flex-col items-center gap-2">
							<SiCss3 className="duration-300 group-hover:text-orange-500" />
							<span className="text-sm leading-none font-bold opacity-0 duration-300 group-hover:opacity-100 lg:text-lg">
								is Fun.
							</span>
						</div>
						<div className="group flex flex-col items-center gap-2">
							<SiJavascript className="duration-300 group-hover:hidden group-hover:text-yellow-500" />
							<SiTypescript className="hidden duration-300 group-hover:block group-hover:text-blue-500" />
							<span className="text-sm leading-none font-bold opacity-0 duration-300 group-hover:opacity-100 lg:text-lg">
								Semicolons.
							</span>
						</div>
					</div>
				</div>
				<span className="pointer-events-none absolute top-2 left-24 text-[16rem] leading-none font-bold opacity-10">About</span>
			</motion.div>
			<button
				className={`text-light hover:text-theme-accent-100 absolute top-4 right-4 cursor-pointer text-5xl ${pageState !== 'About' && 'opacity-0'}`}
				onClick={() => setPageState('Default' as PageState)}>
				<CloseButton className="h-14 w-14" />
			</button>
		</motion.section>
	);
}
