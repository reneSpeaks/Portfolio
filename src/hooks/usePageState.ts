import { createContext, useContext } from 'react';
import { type PageState } from '@config/Page';

interface PageStateContextType {
	pageState: PageState;
	setPageState: React.Dispatch<React.SetStateAction<PageState>>;
}

export const PageStateContext = createContext<PageStateContextType>({
	pageState: 'Intro' as PageState,
	setPageState: () => {}
});

export function usePageState() {
	return useContext(PageStateContext);
}
