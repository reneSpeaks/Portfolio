export default function ContactButton({
	children,
	className,
	onClick
}: {
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<button
			className={`${className} from-theme-primary-100 to-theme-accent-100 pointer-events-auto cursor-pointer bg-gradient-to-r px-8 py-4`}
			onClick={onClick}>
			<span className="text-light text-4xl font-bold tracking-wider">{children}</span>
		</button>
	);
}
