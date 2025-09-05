import { useState } from 'react';
import { ProjectContext } from '@hooks/useProject';
import { Projects } from '@config/projects/Projects';

export function ProjectProvider({ children }: { children: React.ReactNode }) {
	const [Project, setProject] = useState(0);
	const ProjectData = Projects[Project];

	return <ProjectContext.Provider value={{ Project, setProject, ProjectData }}>{children}</ProjectContext.Provider>;
}
