import { ReactNode } from 'react';
import SkillLogo from '../UI/SkillLogo';

export default function SkillLogos({paths}: {paths: Set<string>}) {
    let nodes: Set<ReactNode> = new Set<ReactNode>;
    paths.forEach(path => {
        nodes.add(<SkillLogo logoPath={path} key={path} />);
        });
    if(nodes.size > 1)
        return <div 
            className='
                flex 
                justify-between 
                items-center'>{nodes}</div>;
    else if (nodes.size === 1)
        return nodes
    else return <></>;
}