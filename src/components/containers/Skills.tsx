import { type JSX } from 'react';

import { useSkillsLogo } from '../../contexts/SkillsLogoContext';

import type { SkillData } from '../../custom/types/SkillData';

import Skill from '../UI/Skill';

import skills from '/public/data/skills.json';
const typedSkills = skills as SkillData[];

/**
 * Holds all Skill.tsx displayed in the Home.tsx page skills section.
 * It is extracted here for better Home.tsx readability.
 * 
 * @returns {JSX.Element} The list of skill logos displayed in the Home page skills section.
 */
export default function Skills(): JSX.Element {
    const { getLogoURI } = useSkillsLogo();

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
    >
        {typedSkills.map((skill) => (
            <Skill 
                key={skill.key}
                logoURI={getLogoURI(skill.key)} 
                altText={skill.key}
                width={skill.width} 
                height={skill.height}
            />
        ))}
    </div>
}