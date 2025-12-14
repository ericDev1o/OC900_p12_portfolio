import { useState, useEffect } from "react";

import ProjectCard from "../UI/ProjectCard";

/**
 * One-way tree project URI data flow is done for
 *     1) predictable state,
 *     2) readability,
 *     3) maintainability,
 *     4) leightweight bundle without dependency overhead,
 *     5) avoid redux overkill or Zustand or even useContext at least for now.
 * API data URL should ultimately be the single source of truth.
 * @param basePath import.meta.env.BASE_URL
 * @param logosPath /logos
 * @param projectsPath /projects
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
            const [error] = useState<string | null>(null);


            /* ecosia 
                search: https://www.ecosia.org/search?method=index&q=How%20to%20do%20async%20useEffect%3F%20In%20the%20following%20context%20the%20async%20throws%20Argument%20of%20type%20%27()%20%3D%3E%20Promise%3Cvoid%3E%27%20is%20not%20assignable%20to%20parameter%20of%20type%20%27EffectCallback%27.%20%20%20Type%20%27Promise%3Cvoid%3E%27%20is%20not%20assignable%20to%20type%20%27void%20%7C%20Destructor%27.ts(2345)%20useEffect(async%20()%20%3D%3E%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20const%20response%20%3D%20await%20fetch(%27%2Fdata%2Fprojects.json%27)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(!%20response.ok)%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error(%60HTTP%20error%3A%20status%20%3D%20%24%7Bresponse.status%7D%60)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%20%20%20%20%20else%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20data%20%3D%20await%20response.json()%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setProjects(data)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setLoading(false)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%20%7D&p=1
                output: 
                - verbose heavy state management,
                - memory leak and cleanup overhead
                It's a workaround before <Suspense>, SWR and <ErrorBoundary> is used.
            */
            useEffect(() => 
                { 
                    let active = true; 
                    const fetchData = async () => 
                    { 
                        try { 
                            const res = await fetch(`${import.meta.env.BASE_URL}data/projects.json`); 
                            if (!res.ok) throw new Error(`HTTP error: ${res.status}`); 
                            const data = await res.json(); 
                            if (active) 
                            { 
                                setProjects(data); 
                                setLoading(false); 
                            } 
                        } catch (e: unknown) { 
                            if (active) { 
                                if( e instanceof SyntaxError ||
                                    e instanceof ReferenceError || 
                                    e instanceof TypeError || 
                                    e instanceof Error
                                )
                                console.log("error: " + e.message) 
                            } 
                        } 
                    }; 
                    fetchData(); 
                    // cleanup
                    return () => { 
                       active = false; 
                    }; 
                }, []
            ); 

            if(loading) return <p>chargement des projets</p>;
            if(error) return <p>erreur: {error}</p>;

            return <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        items-start"
                >
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project}
                            projectsPath={projectsPath}
                        />
                    ))}
            </div>
}