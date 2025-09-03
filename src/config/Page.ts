interface WindowSize {
	desktop: number;
	tablet: number;
	mobile: number;
}

const styles: CSSStyleDeclaration = getComputedStyle(document.documentElement);
const desktopBreakpoint: number = parseInt(styles.getPropertyValue('--breakpoint-xl'));
const tabletBreakpoint: number = parseInt(styles.getPropertyValue('--breakpoint-lg'));
const mobileBreakpoint: number = parseInt(styles.getPropertyValue('--breakpoint-sm'));
const fontSize: number = parseFloat(styles.getPropertyValue('font-size'));

export const WindowSize: WindowSize = {
	desktop: desktopBreakpoint * fontSize,
	tablet: tabletBreakpoint * fontSize,
	mobile: mobileBreakpoint * fontSize
};

export type PageState = 'Default' | 'Intro' | 'About' | 'Privacy' | 'Loading';
