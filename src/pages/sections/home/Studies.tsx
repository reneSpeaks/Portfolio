import { usePageState } from '@hooks/usePageState';
// import { Projects } from '@config/projects/Projects';

export default function Studies() {
	const { pageState } = usePageState();
	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} bg-theme-primary-100 relative z-20 flex h-auto w-full items-center justify-center py-20`}>
			<h1>My Studies</h1>
		</section>
	);
}
