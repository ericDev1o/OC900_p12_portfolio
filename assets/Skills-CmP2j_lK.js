import{n as e,r as t}from"./SkillsLogoContext-DJRXFJOP.js";var n=t();function r({logoURI:e,altText:t}){return(0,n.jsx)(`img`,{src:e,className:`
            p-6 
            h-25 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]`,alt:t,loading:`lazy`,decoding:`async`})}function i(){let{getLogoURI:t}=e();return(0,n.jsx)(`div`,{className:`
            flex
            justify-center
            flex-wrap
            items-center`,children:[`HTML`,`CSS`,`SCSS`,`tailwindCSS`,`vite`,`JS`,`TS`,`jest`,`react`,`reactRouter`,`redux`,`lighthouse`,`GTmetrix`,`WAvE`,`axeDevTool`,`greenITanalysis`,`stylelint`,`playwright`,`feedly`,`notion`,`excalidraw`].map(e=>(0,n.jsx)(r,{logoURI:t(e),altText:e},e))})}export{i as default};