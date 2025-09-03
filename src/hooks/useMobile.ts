import { createContext, useContext } from 'react';

interface MobileContextType {
	isMobile: boolean;
	setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileContext = createContext<MobileContextType>({
	isMobile: false,
	setIsMobile: () => {}
});

export function useMobile() {
	return useContext(MobileContext);
}
