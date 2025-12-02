import { useSkillsLogo } from "@/contexts/SkillsLogoContext";

export default function HeadFootLogos() {
    const { getLogoURI } = useSkillsLogo();

    const myLogo = getLogoURI('E');
    const linkedinLogo = getLogoURI('linkedIn');
    const githubLogo = getLogoURI('gitHub');
    
    return  <>
        <img 
            src={myLogo} 
            className=' 
                cursor-not-allowed
                h-6 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Eric logo'
            width={15}
            height={24}
        />
        <a 
            href='https://github.com/ericDev1o' 
            target='_blank'
        >
        <img 
            src={githubLogo} 
            className=' 
                h-6 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='GitHub logo'
            width={25}
            height={24} />
        </a>
        <a 
            href='https://linkedin.com/in/ericfaraut' 
            target='_blank'
        >
        <img 
            src={linkedinLogo} 
            className='
                h-6 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='LinkedIn logo' 
            width={29}
            height={24}
        />
        </a>
    </>
}