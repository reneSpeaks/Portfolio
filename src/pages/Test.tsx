import Contact from '@pages/sections/Contact';
import ProjectsOverview from '@pages/sections/ProjectsOverview';

import Transition from '@components/Transition';

import background from '@assets/layout/Home_BG_Mateusz_Dach.jpg';
import ScrollBar from '@pages/sections/ScrollBar';

import { useRef, useState } from 'react';
import { FaQuestion, FaX } from 'react-icons/fa6';

interface ChatMessage {
	sender: 'them' | 'me';
	message: string;
}

interface FAQ {
	prompt: string;
	question: string;
}

export default function Test() {
	const [expanded, setExpanded] = useState(false);
	const [prompted, setPrompted] = useState(false);
	const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const FAQs: FAQ[] = [
		{
			prompt: 'What services do you offer?',
			question: 'What services do you offer?'
		},
		{
			prompt: 'How much do you charge?',
			question: 'How much do you charge?'
		},
		{
			prompt: 'How long does it take to make a website?',
			question: 'How long does it take to make a website?'
		},
		{
			prompt: 'What about bigger projects?',
			question: 'What about bigger projects?'
		}
	];

	const handlePrompt = (e: React.MouseEvent<HTMLButtonElement>) => {
		setPrompted(true);
		const message = (e.currentTarget as HTMLButtonElement).getAttribute('data-prompt');
		setChatHistory((prevHistory) => [...prevHistory, { sender: 'me', message: message || '' }]);
		setTimeout(() => inputRef.current?.focus(), 0);
	};

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
								className={`${expanded ? `border-primary-100 top-40 ${prompted && '-translate-y-25'} left-8 z-10 border-1` : 'top-0 left-0'} absolute h-20 w-20 overflow-hidden rounded-full shadow-md duration-200`}>
								<img src="src/assets/layout/portraits/Profile.jpg" className="translate-y-1/3 scale-180" />
							</div>

							{expanded && (
								<>
									<div className="pointer-events-auto flex flex-row justify-end p-4">
										<FaX
											onClick={(e) => {
												e.stopPropagation();
												setExpanded(false);
												setPrompted(false);
												setChatHistory([]);
											}}
											className="text-accent-100 hover:text-light cursor-pointer duration-300"
										/>
									</div>
									<div className={`${prompted ? 'hidden' : 'text-light relative flex flex-col gap-4 px-8'}`}>
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
											<h4 className={`${prompted ? 'hidden' : 'mt-14 mb-4 ml-2'}`}>
												<span className="relative text-xl font-bold">
													Frequently Asked Questions
													<FaQuestion className="bg-accent-100 absolute -top-2 -right-4 inline-block rounded-full p-0.5 text-sm font-normal" />
												</span>
											</h4>
											<ul className={`${prompted ? 'hidden' : 'flex flex-col gap-4 text-sm sm:text-lg'}`}>
												{FAQs.map((faq, index) => (
													<button
														onClick={handlePrompt}
														data-prompt={faq.prompt}
														key={index}
														className="border-primary-100 flex cursor-pointer items-center rounded-lg border-1 p-2 shadow-md transition-all duration-200 hover:scale-101">
														<span className="border-primary-100 bg-primary-100 mr-4 h-4 w-4 animate-pulse rounded-[50%] border-3" />
														<span className="">{faq.question}</span>
													</button>
												))}
											</ul>
											<button
												onClick={handlePrompt}
												data-prompt=""
												className={`${prompted ? 'hidden' : 'border-primary-100 mt-10 flex w-8/10 cursor-pointer items-center justify-center justify-self-center rounded-full border-1 px-2 py-2 shadow-lg transition-transform duration-200 hover:scale-101'}`}>
												<span className="">Start a New Conversation</span>
											</button>

											<form className={`${prompted ? 'relative flex h-full flex-col' : 'hidden'}`}>
												<div className="from-light pointer-events-none absolute bottom-0 left-0 z-1 h-full w-full bg-gradient-to-t from-7% to-transparent to-18%" />
												<div className="chat chat-scrollbar">
													<p className="from-me chat-message">
														Hello! I'm René, your virtual assistant. How can I assist you today?
													</p>
													<p className="from-them chat-message">
														Hi René! Can you tell me more about your web development services?
													</p>
													<p className="from-me chat-message">
														Certainly! I specialize in creating responsive and user-friendly websites using the
														latest web technologies. Whether you need a simple portfolio site or a complex web
														application, I've got you covered.
													</p>
													<p className="from-them chat-message">That sounds great! How do we get started?</p>
													<p className="from-me chat-message">
														To get started, simply provide me with some details about your project, such as your
														goals, target audience, and any specific features you'd like to include. From there,
														we can discuss timelines and pricing.
													</p>
													<p className="from-them chat-message">Awesome! I'll send you the details shortly.</p>
													<p className="from-me chat-message">
														Looking forward to it! Feel free to ask if you have any questions.
													</p>
													{/* {chatHistory.map((chat, index) => (
														<>
															<p key={index} className="from-me chat-message">
																{chat.message}
															</p>
															<p className="from-them chat-message">{chat.message}</p>
														</>
													))} */}
												</div>
												<input
													type="text"
													id="userQuestion"
													className="border-primary-100 absolute bottom-0 z-1 w-full cursor-pointer items-center justify-center rounded-full border-1 px-6 py-2 shadow-lg transition-transform duration-200 hover:scale-101"
													ref={inputRef}
													placeholder="Ask me anything..."
												/>
											</form>
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
