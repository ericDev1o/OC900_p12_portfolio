import { 
    type JSX, 
    useEffect, 
    useState
} from 'react';

import { useSkillsLogo } from '../../contexts/SkillsLogoContext';

import { fetchData } from '../../utils/fetchData';

import type { SkillData } from '../../custom/types/SkillData';

import Skill from '../UI/Skill';

/**
 * Holds all Skill.tsx displayed in the Home.tsx page skills section.
 * It is extracted here for better Home.tsx readability.
 * 
 * @returns {JSX.Element} The list of skill logos displayed in the Home page skills section.
 */
export default function Skills(): JSX.Element {
    const { getLogoURI } = useSkillsLogo();

    const [skills, setSkills] = useState<SkillData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        fetchData<SkillData[]>('data/skills.json', controller.signal)
        .then(setSkills)
        .catch(console.error)
        .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    if (loading) return <p>Chargement des compétences...</p>;

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
    >
        {skills.map(skill => (
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