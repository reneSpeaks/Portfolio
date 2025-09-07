import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollBar() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return <motion.div className="bg-theme-primary-100 fixed bottom-0 left-0 z-99 h-1 w-full origin-left" style={{ scaleX }} />;
}
