import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Home from '@pages/Home';
import Projects from '@pages/Projects';
import Imprint from '@pages/Imprint';
import Nav from '@pages/sections/Nav';

import PageWrapper from '@components/PageWrapper';
import Loading from '@components/Loading';
import Footer from '@pages/sections/Footer';

import { IntroProvider } from '@context/IntroContext';
import { MobileProvider } from '@context/MobileContext';
import { PageStateProvider } from '@context/PageStateContext';
import { ThemeProvider } from '@context/ThemeContext';

import { Toaster } from 'react-hot-toast';
import { ProjectProvider } from '@context/ProjectContext';

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.pathname]);

	return (
		<IntroProvider>
			<PageStateProvider>
				<MobileProvider>
					<ThemeProvider>
						<ProjectProvider>
							<Loading />
							<PageWrapper>
								<Nav />
								<AnimatePresence mode="wait">
									<Routes location={location} key={location.pathname}>
										<Route index element={<Home />} />
										<Route path="/projects" element={<Projects />} />
										<Route path="/imprint" element={<Imprint />} />
									</Routes>
								</AnimatePresence>
								<Toaster position="bottom-right" reverseOrder={false} />
							</PageWrapper>
							<Footer />
						</ProjectProvider>
					</ThemeProvider>
				</MobileProvider>
			</PageStateProvider>
		</IntroProvider>
	);
}

export default App;
