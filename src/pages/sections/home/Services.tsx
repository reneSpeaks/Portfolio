// TODO: IMPLEMENT SERVICE SECTION

// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// import ServiceCard from '@components/ServiceCard';

// import { usePageState } from '@hooks/usePageState';

// import { ServicesData } from '@config/Services';

// export default function Services() {
// 	const { pageState } = usePageState();
// 	const servicesRef = useRef<HTMLDivElement>(null);
// 	const { scrollYProgress } = useScroll({ target: servicesRef });
// 	const transformX = useTransform(scrollYProgress, [0, 1], ['0%', '-400%']);

// 	return (
// 		<div className={`${pageState !== 'Default' && 'hidden'} bg-accent-100 h-[400vh]`} ref={servicesRef}>
// 			<section className="sticky top-0 h-[100vh] overflow-hidden">
// 				<motion.div className="flex h-full w-screen" style={{ x: transformX }}>
// 					{ServicesData.map((ServiceItem, index) => (
// 						<ServiceCard key={index} {...ServiceItem} />
// 					))}
// 				</motion.div>
// 			</section>
// 		</div>
// 	);
// }
