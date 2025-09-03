import folderData from '@assets/layout/animation/lotties/folder.json';
import githubData from '@assets/layout/animation/lotties/github.json';
import linkedinData from '@assets/layout/animation/lotties/linkedin.json';
import folderLightData from '@assets/layout/animation/lotties/folder_light.json';
import githubLightData from '@assets/layout/animation/lotties/github_light.json';
import linkedinLightData from '@assets/layout/animation/lotties/linkedin_light.json';

export const Business = {
	initials: 'RW',
	signature: 'Weiberlenn R.',
	name: 'René Weiberlenn',
	email: 'rene@weiberlenn.name',
	mailto: 'rene@weiberlenn.name',
	phone: '+49 176 619 85 791',
	tel: '+4917661985791',
	address: 'Ludwigsfelde (near Berlin)'
};

export const BusinessLinks = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/rene-weiberlenn/',
		animationData: linkedinData,
		animationLightData: linkedinLightData
	},
	{ name: 'GitHub', url: 'https://github.com/reneSpeaks', animationData: githubData, animationLightData: githubLightData },
	{ name: 'Resume', url: 'https://renespeaks.github.io/Resume/', animationData: folderData, animationLightData: folderLightData }
];
