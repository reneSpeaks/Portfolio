import Contact from '@pages/sections/Contact';

import AnimatedIcon from '@components/AnimatedIcon';
import Transition from '@components/Transition';

import { Business, BusinessLinks } from '@config/Business';

import background from '@assets/layout/Home_BG_Mateusz_Dach.jpg';

export default function Imprint() {
	return (
		<Transition>
			<section className="flex w-full max-w-7xl flex-col items-center justify-center place-self-center">
				<div className="mt-40 ml-10 flex w-1/2 flex-col gap-5 self-start sm:self-center">
					<h1 className="text-theme-primary-100 text-4xl font-black sm:text-5xl">Imprint</h1>
					<h2 className="text-2xl font-bold sm:text-3xl">Details</h2>
					<div className="flex flex-col">
						<h3 className="text-xl sm:text-2xl">{Business.name}</h3>
						<div className="flex w-60 flex-row justify-between">
							<p className="text-sm sm:text-base">E-Mail:</p>
							<a className="pointer-events-auto text-sm sm:text-base" href={`mailto:${Business.mailto}`}>
								{Business.email}
							</a>
						</div>

						<div className="flex w-60 flex-row justify-between">
							<p className="text-sm sm:text-base">Phone:</p>
							<a className="pointer-events-auto text-sm sm:text-base" href={`tel:${Business.tel}`}>
								{Business.phone}
							</a>
						</div>

						<div className="flex w-60 flex-row justify-between">
							<p className="text-sm sm:text-base">Address:</p>
							<p className="text-sm sm:text-base">{Business.address}</p>
						</div>
					</div>
				</div>
				<div className="mt-10 ml-10 flex w-1/2 flex-col gap-5 self-start sm:self-center">
					<h2 className="text-3xl font-bold">Links</h2>
					<ul className="pointer-events-auto flex w-60 flex-row justify-between">
						{BusinessLinks.map((item, index) => (
							<li key={index}>
								<a href={item.url} target="_blank" rel="noreferrer">
									<AnimatedIcon width={40} height={40} animationData={item.animationData} />
								</a>
							</li>
						))}
					</ul>
				</div>
				<img
					src={background}
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-15"
				/>
			</section>
			<Contact />
		</Transition>
	);
}
