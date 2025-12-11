import { useSkillsLogo } from '@/contexts/SkillsLogoContext';

export default function HeadFootLogos() {
    const { getLogoURI } = useSkillsLogo();

    const myLogo = getLogoURI('E');
    const linkedinLogo = getLogoURI('linkedIn');
    const githubLogo = getLogoURI('gitHub');
    
    return  <ul 
        className='
            flex 
            flex-col
            items-center 
            sm:flex-row
            gap-8'
        >
            <li>
                <img 
                    src={myLogo} 
                    className=' 
                        cursor-not-allowed
                        will-change-filter 
                        filter 
                        duration-300
                        hover:drop-shadow-[0_0_2em_#646cffaa]' 
                    alt='Eric logo'
                    width={15}
                    height={24}
                />
            </li>
            <li className='
                group
                relative'
            >   
                <a 
                    href='https://github.com/ericDev1o' 
                    target='_blank'
                >
                    <img 
                        src={githubLogo} 
                        alt='GitHub logo'
                        width={25}
                        height={24} 
                    />
                </a>
                    <span className='
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
                    text-nowrap'
                >
                    🔒 Vérifiez toujours l'URL avant de cliquer!
                </span>
            </li>
            <li className='
                group
                relative'
            >   
                <a 
                    href='https://linkedin.com/in/ericfaraut' 
                    target='_blank'
                >
                    <img 
                        src={linkedinLogo} 
                        className='
                            will-change-filter 
                            filter 
                            duration-300
                            hover:drop-shadow-[0_0_2em_#646cffaa]' 
                        alt='LinkedIn logo' 
                        width={29}
                        height={24}
                    />
                </a>
                    <span className='
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
                    text-nowrap'
                >
                    🔒 Vérifiez toujours l'URL avant de cliquer!
                </span>
            </li>
    </ul>
}