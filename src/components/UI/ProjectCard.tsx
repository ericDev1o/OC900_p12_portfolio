import type { Project } from '../../custom/types/Project';
import type { LogoKey } from '../../custom/types/LogoKey';

import { basePath } from '../../config/logoPathsConfig';

import { useSkillsLogo } from '../../contexts/SkillsLogoContext';

import SkillLogos from '../containers/ProjectCardSkillLogos';

import AnimatedDetails from './Accordion';
import LinkClickWarning from './LinkClickWarning';

export default function ProjectCard
(
    {
        project,
        projectsPath
    }: {
        project: Project
        projectsPath: string
    }
)
{
    const alt = project.title.split(',')[0];

    const imgSrc = basePath + projectsPath + project.fileName;

    const logoURIs = new Set<string>();
    const { getLogoURI } = useSkillsLogo();
    project.logos.forEach(logoName => {
        const logoPath = getLogoURI(logoName as LogoKey);
        logoURIs.add(logoPath as string);
    });

    return <article 
        className='
            my-8 
            mx-4 
            bg-gray-900  
            max-w-lg   
            rounded-4xl 
            shadow-xs'
        >
            <div 
                className='
                    p-6 
                    text-center'
            >
                <span 
                    className='
                        group 
                        relative 
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
                    <a 
                        href={project.URL}
                        target='_blank' 
                        aria-label={project.title}
                        className='
                            motion-safe:transition-transform 
                            motion-safe:duration-600 
                            motion-safe:ease-in-out 
                            motion-safe:hover:scale-110  
                            focus-visible:outline-2 
                            focus-visible:outline-blue-500 
                            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)] 
                            focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]'
                    >
                        <img 
                            src={imgSrc}
                            className='
                                w-full 
                                h-max 
                                transition-shadow 
                                duration-600 
                                ease-in-out' 
                            alt={alt}
                            loading='lazy'
                        />
                    </a>
                    <LinkClickWarning />
                </span>
                <h4 
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
                </h4>
                <SkillLogos paths={logoURIs} repo={project.repository} />
            </div>
        <div className='space-y-4'>
            <AnimatedDetails summary='Découvrez ce projet'>
               <h5 className='font-extrabold mt-2'>contexte</h5>
                <p>{project.contexte}</p>
               <h5 className='font-extrabold mt-2'>objectifs</h5>
                <p>{project.objectifs}</p>
               <h5 className='font-extrabold mt-2'>stack technique</h5>
                <p>{project.stackTechnique}</p>
               <h5 className='font-extrabold mt-2'>compétences développées</h5>
                <p>{project.competencesDeveloppees}</p>
               <h5 className='font-extrabold mt-2'>résultats et impact</h5>
                <p>{project.resultatsEtImpact}</p>
               <h5 className='font-extrabold mt-2'>perspectives d'amélioration</h5>
                <p>{project.perspectivesAmelioration}</p>
            </AnimatedDetails>
        </div>
    </article>
}