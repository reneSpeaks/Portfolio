export default function CloseButton({ className }: { className?: string }) {
	return (
		<div className={`group relative z-59 m-auto cursor-pointer ${className}`} aria-label="Close">
			<div className="bg-light group-hover:bg-theme-accent-100 absolute mt-6 h-1 w-full rotate-45 rounded-xs duration-300 ease-in group-hover:-rotate-45"></div>
			<div className="bg-light group-hover:bg-theme-accent-100 absolute mt-6 h-1 w-full -rotate-45 rounded-xs duration-300 ease-in group-hover:rotate-45"></div>
		</div>
	);
}
