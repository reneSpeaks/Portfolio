import musikLebenHeader from '@assets/projects/video/musiklebenintro.mp4';
import musikLebenLogo from '@assets/projects/logo/Musikleben_Logo_uni.png';
import musikLebenMockUp from '@assets/projects/layouts/MusikLeben.png';
import musikLebenDescription from '@config/projects/descriptions/ml_introduction.md?raw';
import musikLebenInsights from '@config/projects/descriptions/ml_insights.md?raw';

export type Projects = {
	name: string;
	subheader: string;
	logo: string;
	period: string;
	role: string;
	context: string;
	description: string;
	insights: string;
	technologies: string[];
	demo: string;
	header: string;
	mockup: string;
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
	}
];
