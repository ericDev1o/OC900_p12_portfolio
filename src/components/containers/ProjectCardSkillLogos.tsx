import { ReactNode } from 'react';
import SkillLogo from '../UI/ProjectCardSkillLogo';

export default function ProjectCardSkillLogos({paths, repo}: {paths: Set<string>, repo: string}) {
    let nodes: Set<ReactNode> = new Set<ReactNode>;
    paths.forEach(path => {
        nodes.add(<SkillLogo logoPath={path} repo={repo} key={path} />);
        });
    if(nodes.size > 1)
        return <div 
            className='
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center'>
                    {nodes}
        </div>;
    else if (nodes.size === 1)
        return nodes
    else return <></>;
}