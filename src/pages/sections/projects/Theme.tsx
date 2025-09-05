import { usePageState } from '@hooks/usePageState';
import { useProject } from '@hooks/useProject';

import type { PageState } from '@config/Page';

import Button from '@components/Button';

export default function Theme({ id }: { id: number }) {
	const { setPageState } = usePageState();
	const { Projects } = useProject();
	const Project = Projects[id];

	return (
		<section className="relative z-20 flex h-auto w-full flex-col items-center justify-center gap-30 overflow-hidden bg-[#F6F6F6] py-10">
			<div className="grid w-full max-w-7xl grid-cols-2 justify-between gap-10 px-5 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap">
				{Project.colors.map((color) => (
					<div key={color.name} className="z-21 flex flex-col items-center gap-4">
						<div className="h-32 w-32 rounded-full border-1 border-[#AAAAAA]" style={{ backgroundColor: color.hex }}></div>
						<span className="font-serif font-bold">{color.name}</span>
					</div>
				))}
			</div>

			<div className={`${Project.font === 'Poppins' ? 'font-poppins' : 'font-league'} w-full max-w-7xl`}>
				<div className="flex w-full flex-row items-center justify-around text-3xl tracking-widest">
					<div className="flex flex-col gap-5 font-bold">
						<span>{Project.font} Bold</span>
						<p>a b c d e f g h i j k l</p>
						<p>m n o p q r s t u v w</p>
						<p>x y z 1 2 3 4 5 6 7 8 9</p>
					</div>
					<div className="flex flex-col gap-5">
						<span>{Project.font} Regular</span>
						<p>a b c d e f g h i j k l</p>
						<p>m n o p q r s t u v w</p>
						<p>x y z 1 2 3 4 5 6 7 8 9</p>
					</div>
				</div>
			</div>

			<Button className="mb-5" onClick={() => setPageState('About' as PageState)}>
				Contact Me
			</Button>
			<div className="border-dark absolute z-10 h-full w-[80%] max-w-6xl border-x-1 opacity-10"></div>
		</section>
	);
}
