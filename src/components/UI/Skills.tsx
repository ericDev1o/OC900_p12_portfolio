import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import { useSkillsLogo } from "@/contexts/SkillsLogoContext";

export default function() {
    const { getLogoURI } = useSkillsLogo();

    const htmlLogo = getLogoURI('HTML');
    const cssLogo = getLogoURI('CSS');
    const scssLogo = getLogoURI('SCSS');
    const viteLogo = getLogoURI('vite');
    const jsLogo = getLogoURI('JS');
    const tsLogo = getLogoURI('TS');

    return <div 
        className="
            flex
            justify-center
            flex-wrap
            items-center"
    >
        <img 
            src={viteLogo} 
            className='
                lazy 
                p-6 
                h-25
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Vite logo' 
        />
        <img 
            src={htmlLogo} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='HTML5 logo' 
        />
        <img 
            src={cssLogo} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='CSS3 logo' 
        />
        <img 
            src={scssLogo} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Sass logo' 
        />            
        <img 
            src={jsLogo} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='JavaScript logo' 
        />
        <img 
            src={tsLogo} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='TypeScript logo' 
        />
        <FontAwesomeIcon 
            icon={faReact}
            className="text-[50px]" 
        />
    </div>
}