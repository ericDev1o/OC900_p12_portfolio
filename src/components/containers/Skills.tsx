import { JSX } from 'react';

import type { LogoKey } from '@/custom/types/LogoKey';
import { useSkillsLogo } from '../../contexts/SkillsLogoContext';

import Skill from '../UI/Skill';

/**
 * Holds all Skill.tsx displayed in the Home.tsx page skills section.
 * It is extracted here for better Home.tsx readability.
 * 
 * @returns {JSX.Element} The list of skill logos displayed in the Home page skills section.
 */
export default function Skills(): JSX.Element {
    const { getLogoURI } = useSkillsLogo();

    const skills = [
        'HTML',
        'CSS',
        'SCSS',
        'tailwindCSS',
        'vite',
        'JS',
        'TS',
        'jest',
        'react',
        'reactRouter',
        'redux',
        'lighthouse',
        'GTmetrix',
        'WAvE',
        'axeDevTool',
        'greenITanalysis',
        'stylelint',
        'playwright',
        'feedly',
        'notion',
        'excalidraw'
    ] as const satisfies LogoKey[];

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
    >
        {skills.map(skill => (
            <Skill 
                key={skill}
                logoURI={getLogoURI(skill)} 
                altText={skill}
            />
        ))}
    </div>
}