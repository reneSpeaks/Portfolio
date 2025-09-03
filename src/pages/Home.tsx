import About from '@pages/sections/home/About';
import Contact from '@pages/sections/Contact';
import Main from '@pages/sections/home/Main';

import Transition from '@components/Transition';

export default function Home() {
	return (
		<Transition>
			<Main />
			<Contact />
			<About />
			<div className="from-primary-100 to-accent-100 pointer-events-none fixed top-0 left-0 z-50 h-1 w-screen bg-gradient-to-l"></div>
			<div className="from-primary-100 to-accent-100 pointer-events-none fixed bottom-0 left-0 z-50 h-1 w-screen bg-gradient-to-r"></div>
		</Transition>
	);
}
