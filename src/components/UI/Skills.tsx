import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { useSkillsLogo } from '../../contexts/SkillsLogoContext';

export default function() {
    const { getLogoURI } = useSkillsLogo();

    const htmlLogo = getLogoURI('HTML');
    const cssLogo = getLogoURI('CSS');
    const scssLogo = getLogoURI('SCSS');
    const tailwind = getLogoURI('tailwindCSS');
    const flowbite = getLogoURI('flowbiteReact');
    const viteLogo = getLogoURI('vite');
    const jsLogo = getLogoURI('JS');
    const tsLogo = getLogoURI('TS');
    const jest = getLogoURI('jest');
    const reactRouter = getLogoURI('reactRouter');
    const redux = getLogoURI('redux');
    const lighthouse = getLogoURI('lighthouse');
    const GTmetrix = getLogoURI('GTmetrix');
    const WAvE = getLogoURI('WAvE');
    const axeDevTool = getLogoURI('axeDevTool');
    const greenITanalysis = getLogoURI('greenITanalysis');
    const htmlValidate = getLogoURI('htmlValidate');
    const stylelint = getLogoURI('stylelint');
    const pa11y = getLogoURI('pa11y');
    const vitestAxe = getLogoURI('vitestAxe');
    const feedly = getLogoURI('feedly');
    const notion = getLogoURI('notion');
    const excalidraw = getLogoURI('excalidraw');

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
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
            loading='lazy'
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
            src={tailwind} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='TailwindCSS logo' 
        />        
         <img 
            src={flowbite} 
            className='
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Flowbite React logo' 
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
         <img 
            src={jest} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Jest logo' 
        />
        <FontAwesomeIcon 
            icon={faReact}
            className='text-[50px]' 
        />
        <img 
            src={reactRouter} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='React Router logo' 
        />
         <img
            src={redux} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Redux logo' 
        />
         <img 
            src={lighthouse} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Lighthouse logo' 
        />
         <img 
            src={GTmetrix} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='GTmetrix logo' 
        />
         <img 
            src={WAvE} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='WAvE logo' 
        />
         <img 
            src={axeDevTool} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Axe DevTool logo' 
        />
         <img 
            src={greenITanalysis} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='GreenIT-Analysis logo' 
        />
         <img 
            src={htmlValidate} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='html-validate logo' 
        />
         <img 
            src={stylelint} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Stylelint logo' 
        />
         <img 
            src={pa11y} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='pa11y logo' 
        />
         <img 
            src={vitestAxe} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Vitest Axe logo' 
        />
         <img 
            src={feedly} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Feedly logo' 
        />
         <img 
            src={notion} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Notion logo' 
        />
         <img 
            src={excalidraw} 
            className=' 
                lazy 
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='excalidraw logo' 
        />
    </div>
}