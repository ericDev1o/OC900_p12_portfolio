import { useSkillsLogo } from '../hooks/useSkillsLogo';

import type { LogoKey } from '../../custom/types/LogoKey';

import { getSkillData } from '../../utils/skillsMap';

export default function ProjectCardSkillLogo(
    { 
        logoKey, 
        repo
    }: 
    {
        logoKey: LogoKey, 
        repo: string
    }) {
    const { getLogoURI } = useSkillsLogo();

    const skill = getSkillData(logoKey);
    if( ! skill) return null;

    const logoPath = getLogoURI(logoKey);
    
    return <section>
        <a 
            href={repo} 
            target='_blank' 
            aria-label={repo}
            className='
                focus-visible:ring-4 
                focus-visible:ring-blue-300 
                focus-visible:ring-offset-2'
        >
            <img 
                src={logoPath} 
                alt={logoKey}
                width={skill.width} 
                height={skill.height} 
                loading='lazy'
                decoding='async'
                className='
                    m-2
                    object-contain'
            />
        </a>
    </section>
}