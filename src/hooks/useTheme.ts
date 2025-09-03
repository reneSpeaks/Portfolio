import { createContext, useContext } from 'react';

interface ThemeContextType {
	isThemed: number;
	setIsThemed: React.Dispatch<React.SetStateAction<number>>;
}

export const ThemeContext = createContext<ThemeContextType>({
	isThemed: 0,
	setIsThemed: () => {}
});

export function useTheme() {
	return useContext(ThemeContext);
}
