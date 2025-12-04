export default function SkillLogo({ logoPath}: {logoPath: string}) {
    const pathSplit = logoPath.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    const altName = fileName.split('.')[0];
    
    return <section>
        <img src={logoPath} alt={altName}></img>
    </section>
}