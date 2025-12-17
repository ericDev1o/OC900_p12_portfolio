import{j as e,L as j,r,R as N,b as y,u as w,a as E}from"./index-XPP8owI_.js";function S({logoPath:n,repo:o}){const s=n.split("/"),c=s[s.length-1].split(".")[0];return e.jsxs("section",{className:`
            group 
            relative`,children:[e.jsx("a",{href:o,target:"_blank","aria-label":o,children:e.jsx("img",{src:n,alt:c,loading:"lazy",className:"m-2"})}),e.jsx(j,{})]})}function k({paths:n,repo:o}){let s=new Set;return n.forEach(t=>{s.add(e.jsx(S,{logoPath:t,repo:o},t))}),s.size>1?e.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:s}):s.size===1?s:e.jsx(e.Fragment,{})}function R({summary:n,children:o}){const s=r.useRef(null),[t,c]=r.useState(!1),[f,d]=r.useState("0px"),[a,x]=r.useState(!1),[l,u]=r.useState(!1),[b,v]=r.useState(""),h=N.useId(),m=()=>c(i=>!i);return r.useEffect(()=>{t?(x(!0),u(!0)):s.current&&(d("0px"),u(!0))},[t]),r.useEffect(()=>{if(a&&t&&s.current){const i=s.current.scrollHeight;d(`${i}px`)}},[a,t]),r.useEffect(()=>{const i=s.current;if(!i)return;const p=g=>{g.propertyName==="max-height"&&!t&&(x(!1),u(!1),d("0px")),g.propertyName==="max-height"&&t&&u(!1)};return i.addEventListener("transitionend",p),()=>{i.removeEventListener("transitionend",p)}},[t]),r.useEffect(()=>{v(t?"Section ouverte":"Section fermée")},[t]),r.useEffect(()=>{t&&a&&s.current&&s.current.focus()},[t,a]),e.jsxs("div",{className:`
      w-full 
      overflow-hidden 
      rounded 
      shadow `,children:[e.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":t,"aria-controls":h,onClick:m,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),m())},className:`
        cursor-pointer 
        flex 
        justify-between 
        items-center 
        px-4 
        py-3 
        font-semibold 
        text-blue-500 
        hover:bg-gray-700 
        select-none`,children:[n,e.jsx("span",{"aria-hidden":"true",className:`
            inline-block 
            transition-transform 
            duration-600 
            motion-reduce:duration-3000
            ease-in-out 
            transform ${t?"rotate-180":""}`,children:"▼"})]}),e.jsx("div",{id:h,ref:s,tabIndex:-1,style:{maxHeight:f},className:`
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out`,children:a&&e.jsx("div",{className:"px-4 py-3",children:o})}),e.jsx("div",{"aria-live":"polite",className:"sr-only","aria-atomic":"true",children:b})]})}function L({project:n,projectsPath:o}){const s=n.title.split(",")[0],t=y+o+n.fileName,c=new Set,{getLogoURI:f}=w();return n.logos.forEach(d=>{const a=f(d);c.add(a)}),e.jsxs("article",{className:`
            m-8 
            bg-gray-900 
            w-full 
            max-w-lg   
            rounded-4xl 
            shadow-xs`,children:[e.jsxs("div",{className:`
                    p-6 
                    text-center`,children:[e.jsxs("span",{className:`
                        group 
                        relative 
                        inline-flex 
                        items-center 
                        bg-brand-softer 
                        text-fg-brand-strong 
                        text-xs 
                        font-medium 
                        px-1.5 
                        py-0.5 
                        rounded-sm`,children:[e.jsx("a",{href:n.URL,target:"_blank","aria-label":n.title,className:`
                            hover:scale-110 
                            transition 
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out`,children:e.jsx("img",{src:t,className:`
                                lazy 
                                w-full 
                                h-max 
                                will-change-filter 
                                filter 
                                duration-300
                                hover:drop-shadow-[0_0_2em_#646cffaa]`,alt:s,loading:"lazy"})}),e.jsx(j,{})]}),e.jsx("h4",{className:`
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading`,children:n.title}),e.jsx(k,{paths:c,repo:n.repository})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs(R,{summary:"Découvrez ce projet",children:[e.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),e.jsx("p",{children:n.contexte}),e.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),e.jsx("p",{children:n.objectifs}),e.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),e.jsx("p",{children:n.stackTechnique}),e.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),e.jsx("p",{children:n.competencesDeveloppees}),e.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),e.jsx("p",{children:n.resultatsEtImpact}),e.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),e.jsx("p",{children:n.perspectivesAmelioration})]})})]})}function P({projectsPath:n}){const[o,s]=r.useState([]),[t,c]=r.useState(!0),[f]=r.useState(null),d=r.useRef(null);return r.useEffect(()=>{let a=!0;return(async()=>{try{const l=await fetch("./data/projects.json");if(!l.ok)throw new Error(`HTTP error: ${l.status}`);const u=await l.json();a&&(s(u),c(!1))}catch(l){a&&(l instanceof SyntaxError||l instanceof ReferenceError||l instanceof TypeError||l instanceof Error)&&console.log("error: "+l.message)}})(),()=>{a=!1}},[]),t?e.jsx("p",{children:"chargement des projets"}):f?e.jsxs("p",{children:["erreur: ",f]}):e.jsx("div",{ref:d,className:`
                        flex
                        flex-wrap
                        justify-center
                        items-start 
                        h-screen 
                        overflow-y-auto
                        relative`,children:o.map((a,x)=>e.jsx(E,{options:{root:d.current,rootMargin:"0px",threshold:0},children:e.jsx(L,{project:a,projectsPath:n})},a.number))})}export{P as default};
