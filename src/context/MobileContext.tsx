import { useState } from 'react';
import { MobileContext } from '@hooks/useMobile';

export function MobileProvider({ children }: { children: React.ReactNode }) {
	const [isMobile, setIsMobile] = useState(false);

	return <MobileContext.Provider value={{ isMobile, setIsMobile }}>{children}</MobileContext.Provider>;
}
