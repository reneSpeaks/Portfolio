import { useState } from 'react';
import Lottie from 'react-lottie';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';

export default function Button({ onClick, className, children }: { onClick?: () => void; className?: string; children: React.ReactNode }) {
	const [isStopped, setIsStopped] = useState(true);

	const chevronLottieOptions = {
		loop: false,
		autoplay: true,
		animationData: chevronData,
		rendererSettings: {
			fps: 60,
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<button
			onClick={onClick}
			onMouseLeave={() => setIsStopped(true)}
			onMouseEnter={() => setIsStopped(false)}
			className={`${className} group shadow-dark pointer-events-auto relative cursor-pointer px-7 py-3 shadow-md`}>
			<span className="text-light text-xl font-black tracking-widest">{children}</span>
			<div className="absolute top-1/2 -right-12 -translate-y-1/2">
				<Lottie options={chevronLottieOptions} height={40} width={40} isStopped={isStopped} />
			</div>
			<div className="bg-theme-primary-100 group-hover:bg-theme-primary-300 absolute inset-0 -z-1 h-full w-full duration-300" />
			<div className="absolute inset-0 -z-1 h-full w-full overflow-hidden">
				<div className="from-theme-primary-100 to-theme-accent-100 absolute top-0 -left-full -z-1 h-full w-full bg-gradient-to-r duration-500 ease-in-out group-hover:left-full" />
			</div>
		</button>
	);
}
