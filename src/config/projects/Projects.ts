import musikLebenHeader from '@assets/projects/video/musiklebenintro.mp4';
import musikLebenLogo from '@assets/projects/logo/Musikleben_Logo_uni.png';
import musikLebenMockUp from '@assets/projects/layouts/MusikLeben.png';
import musikLebenThumbnail from '@assets/projects/video/MusikLeben.png';
import musikLebenDescription from '@config/projects/descriptions/ml_introduction.md?raw';
import musikLebenInsights from '@config/projects/descriptions/ml_insights.md?raw';

import portfolioLogo from '@assets/layout/logo/R_Primary.svg';
import portfolioDescription from '@config/projects/descriptions/portfolio_introduction.md?raw';
import portfolioInsights from '@config/projects/descriptions/portfolio_insights.md?raw';
import portfolioThumbnail from '@assets/projects/video/Portfolio.png';

export type Projects = {
	id: number;
	name: string;
	subheader: string;
	logo: string;
	period: string;
	role: string;
	context: string;
	description?: string;
	insights?: string;
	technologies: string[];
	demo: string;
	header?: string;
	mockup?: string;
	thumbnail?: string;
	theme: {
		[key: string]: string;
	};
	colors: {
		name: string;
		hex: string;
	}[];
}[];

export const Projects: Projects = [
	{
		id: 0,
		name: 'Musik Leben e.V.',
		subheader: 'Local Rock, Blues, Soul & Folk music for everyone.',
		logo: musikLebenLogo,
		period: 'Early 2025',
		role: 'Full-Stack Web Developer',
		context: 'Website Redesign',
		description: musikLebenDescription,
		insights: musikLebenInsights,
		technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Blocknote'],
		demo: 'https://www.musikleben.live',
		header: musikLebenHeader,
		mockup: musikLebenMockUp,
		thumbnail: musikLebenThumbnail,
		theme: {
			'--color-navigation': '#fcfcfc',
			'--color-theme': '#BFB304',
			'--color-theme-footer': '#181818',
			'--color-theme-footer-bg': '#6F7571',
			'--color-theme-header': '#fcfcfc',
			'--color-theme-accent-100': '#BFB304',
			'--color-theme-accent-200': '#BFB304',
			'--color-theme-primary-100': '#080808',
			'--color-theme-primary-200': '#E3E7DB',
			'--color-theme-primary-300': '#BFB304',
			'--color-theme-primary-400': '#6F7571'
		},
		colors: [
			{
				name: 'Old Gold',
				hex: '#BFB304'
			},
			{
				name: 'Alabaster',
				hex: '#E3E7DB'
			},
			{
				name: 'Platinum',
				hex: '#DADADA'
			},
			{
				name: 'Dim Gray',
				hex: '#6F7571'
			},
			{
				name: 'Black',
				hex: '#080808'
			}
		]
	},
	{
		id: 1,
		name: 'Portfolio Website',
		subheader: 'A showcase of my work and projects.',
		logo: portfolioLogo,
		period: 'September 2025',
		role: 'Full-Stack Web Developer',
		context: 'Skill Showcase',
		description: portfolioDescription,
		insights: portfolioInsights,
		technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Framer Motion'],
		demo: 'https://www.weiberlenn.name',
		// header: portfolioHeader,
		// mockup: portfolioMockUp,
		thumbnail: portfolioThumbnail,
		theme: {
			'--color-navigation': '#181818',
			'--color-theme': '#0d324d',
			'--color-theme-footer': '#0d324d',
			'--color-theme-footer-bg': '#080808',
			'--color-theme-header': '#181818',
			'--color-theme-accent-100': '#208aae',
			'--color-theme-accent-200': '#51afce',
			'--color-theme-primary-100': '#0d324d',
			'--color-theme-primary-200': '#124866',
			'--color-theme-primary-300': '#175e7e',
			'--color-theme-primary-400': '#1c7496'
		},
		colors: [
			{
				name: 'Prussian blue',
				hex: '#0d324d'
			},
			{
				name: 'Indigo dye',
				hex: '#124866'
			},
			{
				name: 'Bondi blue',
				hex: '#208aae'
			},
			{
				name: 'White',
				hex: '#fcfcfc'
			},
			{
				name: 'Eerie black',
				hex: '#181818'
			}
		]
	}
];
