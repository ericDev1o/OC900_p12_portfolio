import{i as e,n as t,r as n}from"./SkillsLogoContext-hhCoefVG.js";import{t as r}from"./skills-CXnAwj30.js";e();var i=n();function a({logoURI:e,altText:t,width:n,height:r}){return(0,i.jsx)(`img`,{src:e,width:n,height:r,className:`
            p-6 
            w-auto 
            object-contain 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]`,alt:t,loading:`lazy`,decoding:`async`})}var o=r;function s(){let{getLogoURI:e}=t();return(0,i.jsx)(`div`,{className:`
            flex
            justify-center
            flex-wrap
            items-center`,children:o.map(t=>(0,i.jsx)(a,{logoURI:e(t.key),altText:t.key,width:t.width,height:t.height},t.key))})}export{s as default};