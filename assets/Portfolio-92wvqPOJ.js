import{j as e,L as j,r as a,R as v,b as y,u as w}from"./index-DiVv1nDQ.js";function E({logoPath:n,repo:l}){const s=n.split("/"),d=s[s.length-1].split(".")[0];return e.jsxs("section",{className:`
            group 
            relative`,children:[e.jsx("a",{href:l,target:"_blank","aria-label":l,children:e.jsx("img",{src:n,alt:d,loading:"lazy",className:"m-2"})}),e.jsx(j,{})]})}function S({paths:n,repo:l}){let s=new Set;return n.forEach(t=>{s.add(e.jsx(E,{logoPath:t,repo:l},t))}),s.size>1?e.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:s}):s.size===1?s:e.jsx(e.Fragment,{})}function k({summary:n,children:l}){const s=a.useRef(null),[t,d]=a.useState(!1),[f,i]=a.useState("0px"),[c,r]=a.useState(!1),[x,u]=a.useState(!1),[b,N]=a.useState(""),m=v.useId(),h=()=>d(o=>!o);return a.useEffect(()=>{t?(r(!0),u(!0)):s.current&&(i("0px"),u(!0))},[t]),a.useEffect(()=>{if(c&&t&&s.current){const o=s.current.scrollHeight;i(`${o}px`)}},[c,t]),a.useEffect(()=>{const o=s.current;if(!o)return;const p=g=>{g.propertyName==="max-height"&&!t&&(r(!1),u(!1),i("0px")),g.propertyName==="max-height"&&t&&u(!1)};return o.addEventListener("transitionend",p),()=>{o.removeEventListener("transitionend",p)}},[t]),a.useEffect(()=>{N(t?"Section ouverte":"Section fermée")},[t]),a.useEffect(()=>{t&&c&&s.current&&s.current.focus()},[t,c]),e.jsxs("div",{className:`
      w-full 
      overflow-hidden 
      rounded 
      shadow `,children:[e.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":t,"aria-controls":m,onClick:h,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),h())},className:`
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
            transform ${t?"rotate-180":""}`,children:"▼"})]}),e.jsx("div",{id:m,ref:s,tabIndex:-1,style:{maxHeight:f},className:`
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out`,children:c&&e.jsx("div",{className:"px-4 py-3",children:l})}),e.jsx("div",{"aria-live":"polite",className:"sr-only","aria-atomic":"true",children:b})]})}function R({project:n,projectsPath:l}){const s=n.title.split(",")[0],t=y+l+n.fileName,d=new Set,{getLogoURI:f}=w();return n.logos.forEach(i=>{const c=f(i);d.add(c)}),e.jsxs("article",{className:`
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
                        text-heading`,children:n.title}),e.jsx(S,{paths:d,repo:n.repository})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs(k,{summary:"Découvrez ce projet",children:[e.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),e.jsx("p",{children:n.contexte}),e.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),e.jsx("p",{children:n.objectifs}),e.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),e.jsx("p",{children:n.stackTechnique}),e.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),e.jsx("p",{children:n.competencesDeveloppees}),e.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),e.jsx("p",{children:n.resultatsEtImpact}),e.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),e.jsx("p",{children:n.perspectivesAmelioration})]})})]})}function I({projectsPath:n}){const[l,s]=a.useState([]),[t,d]=a.useState(!0),[f]=a.useState(null);return a.useEffect(()=>{let i=!0;return(async()=>{try{const r=await fetch("./data/projects.json");if(!r.ok)throw new Error(`HTTP error: ${r.status}`);const x=await r.json();i&&(s(x),d(!1))}catch(r){i&&(r instanceof SyntaxError||r instanceof ReferenceError||r instanceof TypeError||r instanceof Error)&&console.log("error: "+r.message)}})(),()=>{i=!1}},[]),t?e.jsx("p",{children:"chargement des projets"}):f?e.jsxs("p",{children:["erreur: ",f]}):e.jsx("div",{className:`
                        flex
                        flex-wrap
                        justify-center
                        items-start`,children:l.map((i,c)=>e.jsx(R,{project:i,projectsPath:n},c))})}export{I as default};
