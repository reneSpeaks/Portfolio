import { useState } from 'react';
import { PageStateContext } from '@hooks/usePageState';
import { type PageState } from '@config/Page';

export function PageStateProvider({ children }: { children: React.ReactNode }) {
	const [pageState, setPageState] = useState<PageState>('Intro');

	return <PageStateContext.Provider value={{ pageState, setPageState }}>{children}</PageStateContext.Provider>;
}
