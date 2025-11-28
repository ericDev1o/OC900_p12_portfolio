import { 
    Accordion, 
    AccordionContent, 
    AccordionPanel, 
    AccordionTitle 
} from "flowbite-react";

import '../../types/Project';

export default function ProjectCard
(
    {
        project,
        basePath, 
        logosPath, 
        projectsPath
    }: {
        project: Project
        basePath: string,
        logosPath: string,
        projectsPath: string
    }
)
{
    const alt = project.title.split(',')[0];

    const imgSrc = basePath + projectsPath + project.fileName;

    return <article 
        className='
            m-8 
            bg-gray-900  
            block 
            max-w-sm 
            rounded-4xl 
            shadow-xs'
        >
            <a 
                href={project.URL}
                target='_blank' 
                aria-label={project.title}
            >
            <h4
            className='
                text-2xl
                leading-loose'
            >
                {project.number}
            </h4>
            <div 
                className='
                    p-6 
                    text-center'
            >
                <span 
                    className='
                        inline-flex 
                        items-center 
                        bg-brand-softer 
                        text-fg-brand-strong 
                        text-xs 
                        font-medium 
                        px-1.5 
                        py-0.5 
                        rounded-sm'
                >
                    <img 
                        src={imgSrc}
                        className='
                            lazy 
                            max-h-80
                            will-change-filter 
                            filter 
                            duration-300
                            hover:drop-shadow-[0_0_2em_#646cffaa]' 
                        alt={alt}
                    />
                </span>
                <p 
                    className='
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading'
                > 
                    {project.title}
                </p>
            </div>
        </a>
        <Accordion collapseAll>
            <AccordionPanel>
                <AccordionTitle>Découvrez ce projet</AccordionTitle>
                <AccordionContent>
                    <h5>contexte</h5>
                    <p>{project.contexte}</p>
                    <h5>objectifs</h5>
                    <p>{project.objectifs}</p>
                    <h5>stack technique</h5>
                    <p>{project.stackTechnique}</p>
                    <h5>compétences développées</h5>
                    <p>{project.competencesDeveloppees}</p>
                    <h5>résultats et impact</h5>
                    <p>{project.resultatsEtImpact}</p>
                    <h5>perspectives d'amélioration</h5>
                    <p>{project.perspectivesAmelioration}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </article>
}