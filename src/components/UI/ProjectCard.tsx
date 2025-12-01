import {useEffect, useRef, useState} from "react";

import '../../types/Project';

export default function ProjectCard
(
    {
        index,
        project,
        basePath, 
        logosPath, 
        projectsPath
    }: {
        index: number, 
        project: Project
        basePath: string,
        logosPath: string,
        projectsPath: string
    }
)
{
    const alt = project.title.split(',')[0];

    const imgSrc = basePath + projectsPath + project.fileName;

    const [openId, setOpenId] = useState<number | null>(null);

    const isOpen = openId === project.number;

    const detailsRef = useRef<(HTMLDetailsElement | null)[]>([]);

    const handleToggle = (index: number, number: number) => {
    const current = detailsRef.current[index];
    if (current) {
      if (openId === number) {
        current.open = false;
        setOpenId(null);
      } else {
        setOpenId(number);
        detailsRef.current.forEach((detail, idx) => {
          if (detail && idx !== index) detail.open = false;
        });
        current.open = true;
      }
    }
  };

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
        <div className="space-y-4">
            <details
                key={project.number}
                ref={(el) => {detailsRef.current[index] = el}}
                open={isOpen}
                onToggle={() => handleToggle(index, project.number)}
                className="rounded shadow"
            >
                <summary className="
                    list-none
                    cursor-pointer 
                    select-none 
                    px-4 
                    py-3 
                    hover:bg-gray-700 
                    hover:rounded
                    font-semibold
                    relative
                    flex
                    items-center
                    justify-between"
                >
                    Découvrez ce projet
                     <span
                        className={`
                            transition-transform
                            duration-300
                            ease-in-out
                            inline-block ${
                                isOpen ? 'rotate-180' : ''
                             }
                        `}
                        aria-hidden="true"
                        >
                        ▼
                        </span>
                </summary>
                <div className="px-4 py-3">
                    <h6 className="font-extrabold mt-2">contexte</h6>
                    <p>{project.contexte}</p>
                    <h6 className="font-extrabold mt-2">objectifs</h6>
                    <p>{project.objectifs}</p>
                    <h6 className="font-extrabold mt-2">stack technique</h6>
                    <p>{project.stackTechnique}</p><h6 className="font-extrabold mt-2">compétences développées</h6>
                    <p>{project.competencesDeveloppees}</p>
                    <h6 className="font-extrabold mt-2">résultats et impact</h6>
                    <p>{project.resultatsEtImpact}</p>
                    <h6 className="font-extrabold mt-2">perspectives d'amélioration</h6>
                    <p>{project.perspectivesAmelioration}</p>
                </div>
            </details>
        </div>
    </article>
}