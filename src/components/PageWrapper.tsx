import type { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
	return <div className="bg-light relative z-10 flex min-h-dvh flex-col shadow-[10px_10px_10px_rgba(0,0,0,0.5)]">{children}</div>;
}
