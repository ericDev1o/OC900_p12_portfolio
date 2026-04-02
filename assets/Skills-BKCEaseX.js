import{i as e,n as t,r as n}from"./SkillsLogoContext-nXhMdITl.js";import{t as r}from"./fetchData-D57YVBhk.js";var i=e(),a=n();function o({logoURI:e,altText:t,width:n,height:r}){return(0,a.jsx)(`img`,{src:e,width:n,height:r,className:`
            p-6 
            w-auto 
            object-contain 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]`,alt:t,loading:`lazy`,decoding:`async`})}function s(){let{getLogoURI:e}=t(),[n,s]=(0,i.useState)([]),[c,l]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=new AbortController;return r(`data/skills.json`,e.signal).then(s).catch(console.error).finally(()=>l(!1)),()=>e.abort()},[]),c?(0,a.jsx)(`p`,{children:`Chargement des compétences...`}):(0,a.jsx)(`div`,{className:`
            flex
            justify-center
            flex-wrap
            items-center`,children:n.map(t=>(0,a.jsx)(o,{logoURI:e(t.key),altText:t.key,width:t.width,height:t.height},t.key))})}export{s as default};