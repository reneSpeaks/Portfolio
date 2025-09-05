import { createContext, useContext } from 'react';
import type { Projects } from '@config/projects/Projects';

interface ProjectContextType {
	Project: number;
	setProject: React.Dispatch<React.SetStateAction<number>>;
	ProjectData: Projects[number];
}

export const ProjectContext = createContext<ProjectContextType>({
	Project: 0,
	setProject: () => {},
	ProjectData: {} as Projects[number]
});

export function useProject() {
	return useContext(ProjectContext);
}
