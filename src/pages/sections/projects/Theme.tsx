import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import type { PageState } from '@config/Page';

import Button from '@components/Button';

export default function Theme() {
	const { pageState, setPageState } = usePageState();
	const { ProjectData } = useProject();

	return (
		<section
			className={`${pageState !== 'Default' ? 'invisible hidden' : 'visible flex'} relative z-20 flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#F6F6F6] py-10`}>
			<div className="grid w-full max-w-7xl grid-cols-2 justify-between gap-10 px-5 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap">
				{ProjectData.colors.map((color) => (
					<div key={color.name} className="z-21 flex flex-col items-center gap-4">
						<div className="h-32 w-32 rounded-full border-1 border-[#AAAAAA]" style={{ backgroundColor: color.hex }}></div>
						<span className="font-serif font-bold">{color.name}</span>
					</div>
				))}
			</div>

			<Button className="mt-15 mb-5" onClick={() => setPageState('About' as PageState)}>
				Contact Me
			</Button>
			<div className="border-dark absolute z-10 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
