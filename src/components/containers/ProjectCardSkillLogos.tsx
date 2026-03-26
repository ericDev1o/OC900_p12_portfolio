import type { JSX } from 'react';

import SkillLogo from '../UI/ProjectCardSkillLogo';

import type { LogoKey } from '../../custom/types/LogoKey';

/**
 * This component is the container of ProjectCardSkillLogo.tsx.
 * ProjectCard prefix is specified to avoid confusion 
 * with skill logos on the Home.tsx page in the skills section.
 * 
 * @param {Set<LogoKey>} keys are logo names
 * @param {string} repo URL each logo links to
 * @returns {JSX.Element} a container element wrapping the SkillLogo components,
 * or a single SkillLogo, or an empty fragment if none.
 */
export default function ProjectCardSkillLogos({
    keys, 
    repo
}: {
    keys: Set<LogoKey>, 
    repo: string}
): JSX.Element {
    const nodes = Array.from(keys).map(key => (
        <SkillLogo logoKey={key} repo={repo} />
    ));

    if( ! nodes.length) return <></>;

    return nodes.length === 1 
    ? nodes[0]
    : <div 
        className='
            flex 
            flex-wrap 
            shrink-0 
            justify-between 
            items-center'>
                {nodes}
    </div>;
}