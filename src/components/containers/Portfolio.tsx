import { 
    type JSX,
    useState
} from 'react';

import type { Project } from '@/custom/types/Project';

import LazyLoadWrapper from './LazyLoadWrapper';
import ProjectCard from '../UI/ProjectCard';

import projects from '/public/data/projects.json';
/**
 * Container for ProjectCard components.
 * 
 * Fetches project data from /data/projects.json and renders each project
 * inside a LazyLoadWrapper for viewport-based lazy rendering.
 * 
 * One-way tree project URI data flow is done for
 *     1) predictable state,
 *     2) readability,
 *     3) maintainability.
 * It avoids overkill state management libraries (redux, Zustand etc).
 * No need for @tanstack/react-query in this simple case of API-less static data.
 * API data URL should be the single source of truth.
 * 
 * @param {string} projectsPath Base path for project URLs (e.g. /projects).
 * @returns {JSX.Element} A div containing LazyLoadWrapper ProjectCard components.
 */
export default function Portfolio(
    {
        projectsPath
    }: {
        projectsPath: string
}): JSX.Element {
    const [root, setRoot] = useState<HTMLDivElement | null>(null);

    return <div
            ref = {setRoot}
            className='
                flex
                flex-col
                justify-center
                items-center 
                gap-8'
        >
            {projects.map((project: Project) => (
                <LazyLoadWrapper
                        key={project.number}
                        options={{ 
                            root: root ?? undefined, 
                            rootMargin: '0px',
                            threshold: 0
                        }}
                >
                    <ProjectCard 
                        project={project}
                        projectsPath={projectsPath}
                    />
                </LazyLoadWrapper>
            ))}
    </div>
}