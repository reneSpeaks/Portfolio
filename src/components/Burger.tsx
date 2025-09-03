import { useMobile } from '@hooks/useMobile';

interface BurgerProps {
	isOpen: boolean;
	burgerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function Burger({ isOpen, burgerRef }: BurgerProps) {
	const { isMobile } = useMobile();

	return (
		<button
			ref={burgerRef}
			className={
				isMobile
					? 'group text-theme-accent-100 drop-shadow-theme-primary-100 z-59 inline-flex h-fit items-center justify-center text-center drop-shadow-xs'
					: 'hidden'
			}
			aria-pressed={isOpen}
			type="button">
			<span className="sr-only">Menu</span>
			<svg className="h-10 w-10 cursor-pointer fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<rect
					className="group-hover:text-theme-accent-200 origin-center translate-x-[7px] -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
					y="7"
					width="9"
					height="1.5"
					rx="1"></rect>
				<rect
					className="group-hover:text-theme-accent-200 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
					y="7"
					width="16"
					height="1.5"
					rx="1"></rect>
				<rect
					className="group-hover:text-theme-accent-200 origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
					y="7"
					width="9"
					height="1.5"
					rx="1"></rect>
			</svg>
		</button>
	);
}
