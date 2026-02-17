import{j as s,u as a}from"./index-SU77f_Ym.js";function o({logoURI:e,altText:t}){return s.jsx("img",{src:e,className:`
            p-6 
            h-25 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]`,alt:t,loading:"lazy"})}function r(){const{getLogoURI:e}=a(),t=["HTML","CSS","SCSS","tailwindCSS","vite","JS","TS","jest","react","reactRouter","redux","lighthouse","GTmetrix","WAvE","axeDevTool","greenITanalysis","stylelint","pa11y","vitestAxe","feedly","notion","excalidraw"];return s.jsx("div",{className:`
            flex
            justify-center
            flex-wrap
            items-center`,children:t.map(n=>s.jsx(o,{logoURI:e(n),altText:n},n))})}export{r as default};
