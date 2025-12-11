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
            <span className="
                absolute 
                bottom-full 
                mb-2 
                left-1/2 
                -translate-x-1/2 
                z-40 
                bg-white 
                text-gray-900 
                text-xs 
                rounded 
                py-1 
                px-3 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity
                text-nowrap"
            >
                🔒 Vérifiez toujours l'URL avant de cliquer!
            </span>
        </section>
}