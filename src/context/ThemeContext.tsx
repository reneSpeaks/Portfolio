import { useState } from 'react';
import { ThemeContext } from '@hooks/useTheme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [isThemed, setIsThemed] = useState(0);

	return <ThemeContext.Provider value={{ isThemed, setIsThemed }}>{children}</ThemeContext.Provider>;
}
