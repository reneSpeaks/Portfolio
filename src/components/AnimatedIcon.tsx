import { useState } from 'react';
import Lottie from 'react-lottie';

export default function AnimatedIcon({
	animationData,
	height,
	width,
	className
}: {
	animationData: object;
	height: number;
	width: number;
	className?: string;
}) {
	const [isStopped, setIsStopped] = useState(true);

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			fps: 60,
			preserveAspectRatio: 'xMidYMid slice'
		},
		className: className
	};

	return (
		<div onMouseEnter={() => setIsStopped(false)} onMouseLeave={() => setIsStopped(true)} className={className}>
			<Lottie options={defaultOptions} height={height} width={width} isStopped={isStopped} />
		</div>
	);
}
