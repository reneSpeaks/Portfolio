import { useEffect, useState } from 'react';
import { IntroContext } from '@hooks/useIntro';

export function IntroProvider({ children }: { children: React.ReactNode }) {
	const [hasIntro, setHasIntro] = useState(true);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setHasIntro(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return <IntroContext.Provider value={{ hasIntro, setHasIntro }}>{children}</IntroContext.Provider>;
}
