import LinkClickWarning from "./LinkClickWarning";

export default function SkillLogo({ logoPath, repo}: {logoPath: string, repo: string}) {
    const pathSplit = logoPath.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    const altName = fileName.split('.')[0];
    
    return <section
        className='
            group 
            relative'
        >
            <a 
                href={repo} 
                target='_blank' 
                aria-label={repo}
            >
                <img src={logoPath} alt={altName}></img>
            </a>
            <LinkClickWarning />
        </section>
}