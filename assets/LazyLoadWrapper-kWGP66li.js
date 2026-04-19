import{i as e,r as t}from"./SkillsLogoContext-hhCoefVG.js";var n=e();function r(e,t){let[r,i]=(0,n.useState)(!1);return(0,n.useEffect)(function(){let n=e.current;if(!n||typeof IntersectionObserver>`u`)return;let r=new IntersectionObserver(([e])=>i(e.isIntersecting),t);return r.observe(n),()=>r.disconnect()},[e,t]),r}var i={root:null,rootMargin:`0px`,threshold:0},a=t();function o({children:e,options:t}){let o=(0,n.useRef)(null);return(0,a.jsx)(`div`,{ref:o,className:`
            relative`,tabIndex:0,children:(0,a.jsx)(`div`,{className:`
                    transition-opacity 
                    duration-500 
                    ease-in-out
                    ${r(o,(0,n.useMemo)(()=>t??i,[t]))?`opacity-100 pointer-events-auto`:`opacity-0 pointer-events-none`}
                `,children:e})})}export{r as n,o as t};