import { createContext, useContext } from 'react';
import { Projects } from '@config/projects/Projects';

interface ProjectContextType {
	Project: number;
	setProject: React.Dispatch<React.SetStateAction<number>>;
	ProjectData: Projects[number];
	Projects: typeof Projects;
}

export const ProjectContext = createContext<ProjectContextType>({
	Project: 0,
	setProject: () => {},
	ProjectData: {} as Projects[number],
	Projects: Projects
});

export function useProject() {
	return useContext(ProjectContext);
}
