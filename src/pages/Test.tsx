import Contact from '@pages/sections/Contact';
import ProjectsOverview from '@pages/sections/ProjectsOverview';

import Transition from '@components/Transition';

import background from '@assets/layout/Home_BG_Mateusz_Dach.jpg';
import ScrollBar from '@pages/sections/ScrollBar';

import { useState } from 'react';
import { FaQuestion, FaX } from 'react-icons/fa6';

export default function Test() {
	const [expanded, setExpanded] = useState(false);
	return (
		<Transition>
			<section className="flex h-dvh w-full max-w-7xl flex-col items-center justify-center place-self-center transition-all duration-500 ease-in-out">
				<div className="fixed bottom-0 left-1/2 z-1 flex h-full w-full max-w-7xl -translate-x-1/2">
					<div className="pointer-events-auto fixed bottom-0 left-0 max-h-[calc(100svh-2rem)] w-full sm:bottom-6 sm:left-6 sm:h-180 sm:w-120 sm:rounded-xl">
						<div
							className={`bg-primary-100 absolute flex flex-col overflow-hidden rounded-[50%] shadow-2xl transition-all duration-300 ease-in-out ${
								expanded
									? 'bottom-0 left-0 h-160 w-full rounded-none sm:h-11/12 sm:rounded-xl'
									: 'bottom-6 left-6 h-20 w-20 cursor-pointer'
							}`}
							onClick={() => {
								if (!expanded) setExpanded(true);
							}}>
							<div
								className={`${expanded ? 'border-primary-100 top-40 left-8 z-10 border-1' : 'top-0 left-0'} absolute h-20 w-20 overflow-hidden rounded-full shadow-md duration-200`}>
								<img src="src/assets/layout/portraits/Profile.jpg" className="translate-y-1/3 scale-180" />
							</div>

							{expanded && (
								<>
									<div className="pointer-events-auto flex flex-row justify-end p-4">
										<FaX
											onClick={(e) => {
												e.stopPropagation();
												setExpanded(false);
											}}
											className="text-accent-100 hover:text-light cursor-pointer duration-300"
										/>
									</div>
									<div className="text-light relative flex flex-col gap-4 px-8">
										<h3 className="text-theme-footer-bg/10 pointer-events-none absolute -left-20 text-[16rem] leading-none font-black">
											René
										</h3>
										<p className="text-xl font-bold">Hey there!</p>
										<p className="text-md sm:text-lg">
											I am René, a passionate Web Developer. <br />
											How may I help you?
										</p>
									</div>

									<div className="z-1 mt-8 h-full p-4">
										<div className="bg-light border-primary-100 relative h-full rounded-xl border-1 p-4">
											<h4 className="mt-14 mb-4 ml-2">
												<span className="relative text-xl font-bold">
													Frequently Asked Questions
													<FaQuestion className="bg-accent-100 absolute -top-2 -right-4 inline-block rounded-full p-0.5 text-sm font-normal" />
												</span>
											</h4>
											<ul className="flex flex-col gap-4 text-sm sm:text-lg">
												<button className="border-primary-100 flex cursor-pointer items-center rounded-lg border-1 p-2 shadow-md transition-all duration-200 hover:scale-101">
													<span className="border-primary-100 bg-primary-100 mr-4 h-4 w-4 animate-pulse rounded-[50%] border-3" />
													<span className="">What services do you offer?</span>
												</button>
												<button className="border-primary-100 flex cursor-pointer items-center rounded-lg border-1 p-2 shadow-md transition-all duration-200 hover:scale-101">
													<span className="border-primary-100 bg-primary-100 mr-4 h-4 w-4 animate-pulse rounded-[50%] border-3" />
													<span className="">How much do you charge?</span>
												</button>
												<button className="border-primary-100 flex cursor-pointer items-center rounded-lg border-1 p-2 shadow-md transition-all duration-200 hover:scale-101">
													<span className="border-primary-100 bg-primary-100 mr-4 h-4 w-4 animate-pulse rounded-[50%] border-3" />
													<span className="">How long does it take to make a website?</span>
												</button>
												<button className="border-primary-100 flex cursor-pointer items-center rounded-lg border-1 p-2 shadow-md transition-all duration-200 hover:scale-101">
													<span className="border-primary-100 bg-primary-100 mr-4 h-4 w-4 animate-pulse rounded-[50%] border-3" />
													<span className="">What about bigger projects?</span>
												</button>
											</ul>
											<button className="border-primary-100 mt-10 flex w-8/10 cursor-pointer items-center justify-center justify-self-center rounded-full border-1 px-2 py-2 shadow-lg transition-transform duration-200 hover:scale-101">
												<span className="">Start a New Conversation</span>
											</button>
										</div>
									</div>

									<div className="bg-light absolute bottom-0 h-3/5 w-full" />
								</>
							)}
						</div>
					</div>
				</div>
				<img
					src={background}
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-15"
				/>
			</section>
			<Contact />
			<ProjectsOverview />
			<ScrollBar />
		</Transition>
	);
}
