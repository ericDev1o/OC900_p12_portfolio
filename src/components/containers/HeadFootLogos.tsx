import { useSkillsLogo } from '../../contexts/SkillsLogoContext';
import { IconLink } from '../UI/IconLink';

export default function HeadFootLogos() {
    const { getLogoURI } = useSkillsLogo();

    const myLogo = getLogoURI('E');
    const myLogoRetina = getLogoURI('Eretina');
    const linkedinLogo = getLogoURI('linkedIn');
    const linkedinLogoRetina = getLogoURI('linkedInRetina');
    const githubLogo = getLogoURI('gitHub');
    const githubLogoRetina = getLogoURI('gitHubRetina');
    
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
                srcSet={`${myLogo} 1x, ${myLogoRetina} 1.5x`}
                className=' 
                    cursor-not-allowed 
                    opacity-50
                    object-contain' 
                alt='Eric logo'
                width={15}
                height={24}
            />
        </li>
        <li>   
            <IconLink
                href='https://github.com/ericDev1o'
                src={ githubLogo }
                srcSet={`${githubLogo} 1x, ${githubLogoRetina} 1.5x`}
                alt='GitHub logo'
                classNameImgWidthHeight='w-[25px] h-[24px]'
            />
        </li>
        <li>
            <IconLink
                href='https://linkedin.com/in/ericfaraut' 
                src={ linkedinLogo }
                srcSet={`${linkedinLogo} 1x, ${linkedinLogoRetina} 1.5x`}
                alt='LinkedIn logo' 
                classNameImgWidthHeight='w-[29px] h-[24px]'
            />
        </li>
    </ul>
}