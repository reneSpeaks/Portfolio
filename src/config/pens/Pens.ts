import glassnavigationgif from '@assets/layout/pens/glass-navigation.gif';
import glassnavigationimage from '@assets/layout/pens/glass-navigation.png';
import typescriptapiimage from '@assets/layout/pens/typescriptapi.png';

export type Pens = {
	title: string;
	url: string;
	gif: string;
	img: string;
}[];

export const Pens: Pens = [
	{
		title: 'Anchored Glassmorphism Navigation',
		url: 'https://codepen.io/reneSpeaks/pen/gbPYYQa',
		gif: glassnavigationgif,
		img: glassnavigationimage
	},
	{
		title: 'TypeScript API Boilerplate',
		url: 'https://github.com/reneSpeaks/TypeScript-API',
		gif: typescriptapiimage,
		img: typescriptapiimage
	},
	{
		title: 'More Coming Soon',
		url: '#',
		gif: '',
		img: ''
	},
	{
		title: 'MoreComing Soon',
		url: '#',
		gif: '',
		img: ''
	}
];
