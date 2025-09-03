import { createContext, useContext } from 'react';

interface IntroContextType {
	hasIntro: boolean;
	setHasIntro: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IntroContext = createContext<IntroContextType>({
	hasIntro: true,
	setHasIntro: () => {}
});

export function useIntro() {
	return useContext(IntroContext);
}
