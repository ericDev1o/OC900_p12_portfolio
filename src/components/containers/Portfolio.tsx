import { 
    useState, 
    useEffect, 
    useRef 
} from 'react';

import type { Project } from '@/custom/types/Project';

import ProjectCard from '../UI/ProjectCard';
import LazyLoadWrapper from './LazyLoadWrapper';

/**
 * This component is a container of ProjectCard.tsx.
 * One-way tree project URI data flow is done for
 *     1) predictable state,
 *     2) readability,
 *     3) maintainability,
 *     4) leightweight bundle without dependency overhead,
 *     5) avoid redux overkill or Zustand or even useContext at least for now.
 * API data URL should be the single source of truth.
 * 
 * @param {string} projectsPath /projects
 * @returns ProjectCards from fetched /data/projects.json
 */
export default function Portfolio(
    {
        projectsPath
    }: {
        projectsPath: string
}) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => 
        { 
            const controller = new AbortController();
            
            const fetchProjects = async () => 
            { 
                try { 
                    setLoading(true);
                    setError(null);

                    const res = await fetch(
                        `${import.meta.env.BASE_URL}data/projects.json`,
                        { signal: controller.signal }
                    );

                    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);  

                    setProjects(await res.json()); 
                } catch (e: unknown) { 
                    if (e instanceof DOMException && e.name === 'AbortError')
                        return;
                    
                    console.error('Fetch failed: ',e); 
                    setError('Impossible de charger les projets');
                } finally {
                    setLoading(false);
                }
            };

            fetchProjects(); 
            
            return () => controller.abort();
        }, []
    ); 

    if(loading) return <p>chargement des projets</p>;
    if(error) return <p>erreur: {error}</p>;

    return <div
            ref = {scrollContainerRef}
            className='
                flex
                flex-col
                justify-center
                items-center 
                h-screen 
                overflow-y-auto
                relative'
        >
            {projects.map((project) => (
                <LazyLoadWrapper
                        key={project.number}
                        options={{ 
                        root: scrollContainerRef.current, 
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