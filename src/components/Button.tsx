import { useState } from 'react';
import Lottie from 'react-lottie';

import chevronData from '@assets/layout/animation/lotties/chevron-right.json';
import chevronLightData from '@assets/layout/animation/lotties/chevron-right-light.json';

export default function Button({
	mode,
	chevron,
	onClick,
	className,
	children
}: {
	mode?: 'light' | 'dark';
	chevron?: 'light' | 'dark';
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}) {
	const [isStopped, setIsStopped] = useState(true);

	const chevronLottieOptions = {
		loop: false,
		autoplay: true,
		animationData: mode === 'light' || chevron === 'light' ? chevronLightData : chevronData,
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
			className={`${className} ${mode === 'light' ? 'border-light hover:bg-light border-2 duration-300' : 'shadow-dark shadow-md'} group pointer-events-auto relative cursor-pointer px-5 py-2.5 sm:px-7 sm:py-3`}>
			<span
				className={`${mode === 'light' && 'group-hover:text-dark'} text-light text-base font-bold tracking-widest duration-300 sm:text-xl`}>
				{children}
			</span>
			<div className="absolute top-1/2 -right-12 -translate-y-1/2">
				<Lottie options={chevronLottieOptions} height={40} width={40} isStopped={isStopped} />
			</div>
			{mode !== 'light' && (
				<>
					<div className="from-theme-primary-100 to-theme-accent-100 group-hover:from-theme-primary-100 group-hover:to-theme-accent-200 absolute inset-0 -z-1 h-full w-full bg-gradient-to-r duration-300" />
					<div className="absolute inset-0 -z-1 h-full w-full overflow-hidden">
						<div className="to-theme-primary-100 from-theme-accent-100 absolute top-0 -left-full -z-1 h-full w-full bg-gradient-to-r duration-500 ease-in-out group-hover:left-full" />
					</div>
				</>
			)}
		</button>
	);
}
