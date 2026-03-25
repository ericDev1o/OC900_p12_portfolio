import type { JSX } from 'react';
import SkillLogo from '../UI/ProjectCardSkillLogo';

/**
 * This component is the container of ProjectCardSkillLogo.tsx.
 * ProjectCard prefix is specified to avoid confusion 
 * with skill logos on the Home.tsx page in the skills section.
 * 
 * @param {Set<string>} paths to logo files
 * @param {string} repo URL each logo links to
 * @returns {JSX.Element} a container element wrapping the SkillLogo components,
 * or a single SkillLogo, or an empty fragment if none.
 */
export default function ProjectCardSkillLogos({
    paths, 
    repo
}: {
    paths: Set<string>, 
    repo: string}
): JSX.Element {
    const nodes = Array.from(paths).map(path => (
        <SkillLogo logoPath={path} repo={repo} key={path} />
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