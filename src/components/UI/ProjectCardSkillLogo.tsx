export default function ProjectCardSkillLogo({ logoPath, repo}: {logoPath: string, repo: string}) {
    const pathSplit = logoPath.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    const altName = fileName.split('.')[0];
    
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
                alt={altName}
                loading='lazy'
                decoding='async'
                className='m-2'
            />
        </a>
    </section>
}