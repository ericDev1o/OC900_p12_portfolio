import{r as o,a as G,g as K,b as X,j as s,L as q,R as Y,c as B,u as J,d as Q}from"./index-WTdo0Nur.js";const V=(e,t,n,a)=>{const l=[n,{code:t,...a||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(l,"warn","react-i18next::",!0);C(l[0])&&(l[0]=`react-i18next:: ${l[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...l):console?.warn&&console.warn(...l)},D={},$=(e,t,n,a)=>{C(n)&&D[n]||(C(n)&&(D[n]=new Date),V(e,t,n,a))},F=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},P=(e,t,n)=>{e.loadNamespaces(t,F(e,n))},U=(e,t,n,a)=>{if(C(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return P(e,n,a);n.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(t,F(e,a))},Z=(e,t,n={})=>!t.languages||!t.languages.length?($(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,l)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}),C=e=>typeof e=="string",ee=e=>typeof e=="object"&&e!==null,ne=o.createContext();class te{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var T={exports:{}},O={};var M;function se(){if(M)return O;M=1;var e=G();function t(i,g){return i===g&&(i!==0||1/i===1/g)||i!==i&&g!==g}var n=typeof Object.is=="function"?Object.is:t,a=e.useState,l=e.useEffect,r=e.useLayoutEffect,p=e.useDebugValue;function u(i,g){var b=g(),w=a({inst:{value:b,getSnapshot:g}}),y=w[0].inst,N=w[1];return r(function(){y.value=b,y.getSnapshot=g,S(y)&&N({inst:y})},[i,b,g]),l(function(){return S(y)&&N({inst:y}),i(function(){S(y)&&N({inst:y})})},[i]),p(b),b}function S(i){var g=i.getSnapshot;i=i.value;try{var b=g();return!n(i,b)}catch{return!0}}function m(i,g){return g()}var j=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:u;return O.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:j,O}var A;function re(){return A||(A=1,T.exports=se()),T.exports}var ae=re();const oe=(e,t)=>C(t)?t:ee(t)&&C(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,ie={t:oe,ready:!1},ce=()=>()=>{},le=(e,t={})=>{const{i18n:n}=t,{i18n:a,defaultNS:l}=o.useContext(ne)||{},r=n||a||K();r&&!r.reportNamespaces&&(r.reportNamespaces=new te),r||$(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const p=o.useMemo(()=>({...X(),...r?.options?.react,...t}),[r,t]),{useSuspense:u,keyPrefix:S}=p,m=l||r?.options?.defaultNS,j=C(m)?[m]:m||["translation"],i=o.useMemo(()=>j,j);r?.reportNamespaces?.addUsedNamespaces?.(i);const g=o.useRef(0),b=o.useCallback(f=>{if(!r)return ce;const{bindI18n:d,bindI18nStore:h}=p,x=()=>{g.current+=1,f()};return d&&r.on(d,x),h&&r.store.on(h,x),()=>{d&&d.split(" ").forEach(_=>r.off(_,x)),h&&h.split(" ").forEach(_=>r.store.off(_,x))}},[r,p]),w=o.useRef(),y=o.useCallback(()=>{if(!r)return ie;const f=!!(r.isInitialized||r.initializedStoreOnce)&&i.every(W=>Z(W,r,p)),d=t.lng||r.language,h=g.current,x=w.current;if(x&&x.ready===f&&x.lng===d&&x.keyPrefix===S&&x.revision===h)return x;const z={t:r.getFixedT(d,p.nsMode==="fallback"?i:i[0],S),ready:f,lng:d,keyPrefix:S,revision:h};return w.current=z,z},[r,i,S,p,t.lng]),[N,L]=o.useState(0),{t:R,ready:c}=ae.useSyncExternalStore(b,y,y);o.useEffect(()=>{if(r&&!c&&!u){const f=()=>L(d=>d+1);t.lng?U(r,t.lng,i,f):P(r,i,f)}},[r,t.lng,i,c,u,N]);const v=r||{},E=o.useRef(null),k=o.useRef(),I=f=>{const d=Object.getOwnPropertyDescriptors(f);d.__original&&delete d.__original;const h=Object.create(Object.getPrototypeOf(f),d);if(!Object.prototype.hasOwnProperty.call(h,"__original"))try{Object.defineProperty(h,"__original",{value:f,writable:!1,enumerable:!1,configurable:!1})}catch{}return h},H=o.useMemo(()=>{const f=v,d=f?.language;let h=f;f&&(E.current&&E.current.__original===f?k.current!==d?(h=I(f),E.current=h,k.current=d):h=E.current:(h=I(f),E.current=h,k.current=d));const x=[R,h,c];return x.t=R,x.i18n=h,x.ready=c,x},[R,v,c,v.resolvedLanguage,v.language,v.languages]);if(r&&u&&!c)throw new Promise(f=>{const d=()=>f();t.lng?U(r,t.lng,i,d):P(r,i,d)});return H};function ue({logoPath:e,repo:t}){const n=e.split("/"),l=n[n.length-1].split(".")[0];return s.jsxs("section",{className:`
            group 
            relative`,children:[s.jsx("a",{href:t,target:"_blank","aria-label":t,children:s.jsx("img",{src:e,alt:l,loading:"lazy",className:"m-2"})}),s.jsx(q,{})]})}function de({paths:e,repo:t}){let n=new Set;return e.forEach(a=>{n.add(s.jsx(ue,{logoPath:a,repo:t},a))}),n.size>1?s.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:n}):n.size===1?n:s.jsx(s.Fragment,{})}function fe({summary:e,children:t}){const n=o.useRef(null),[a,l]=o.useState(!1),[r,p]=o.useState("0px"),[u,S]=o.useState(!1),[m,j]=o.useState(!1),[i,g]=o.useState(""),b=Y.useId(),w=()=>l(c=>!c),y=c=>{m!==c&&j(c)},N=c=>{r!==c&&p(c)},L=c=>{u!==c&&S(c)},{t:R}=le();return o.useEffect(()=>{y(!0),a?L(!0):n.current&&N("0px")},[a]),o.useEffect(()=>{if(u&&a&&n.current){const v=`${n.current.scrollHeight}px`;N(v)}},[u,a]),o.useEffect(()=>{const c=n.current;if(!c)return;const v=k=>{k.propertyName==="max-height"&&!a&&(L(!1),y(!1),N("0px")),k.propertyName==="max-height"&&a&&y(!1)},E="ontransitionend"in window||"onwebkittransitionend"in window;if(E)return c.addEventListener("transitionend",v),()=>{c.removeEventListener("transitionend",v)};if(!E){const I=setTimeout(()=>{v({propertyName:"max-height"})},600);return()=>clearTimeout(I)}},[a]),o.useEffect(()=>{g(R(a?"section.opened":"section.closed"))},[a,R]),o.useEffect(()=>{a&&u&&n.current&&n.current.focus()},[a,u]),s.jsxs("div",{className:`
      w-full 
      overflow-hidden 
      rounded 
      shadow `,children:[s.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":a,"aria-controls":b,onClick:w,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),w())},className:`
        cursor-pointer 
        flex 
        justify-between 
        items-center 
        px-4 
        py-3 
        font-semibold 
        text-blue-500 
        hover:bg-gray-700 
        select-none`,children:[e,s.jsx("span",{"aria-hidden":"true",className:`
            inline-block 
            transition-transform 
            duration-600 
            motion-reduce:duration-3000
            ease-in-out 
            transform ${a?"rotate-180":""}`,children:"▼"})]}),s.jsx("div",{id:b,ref:n,tabIndex:-1,style:{maxHeight:r},className:`
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out`,children:u&&s.jsx("div",{className:"px-4 py-3",children:t})}),s.jsx("div",{"aria-live":"polite",className:"sr-only","aria-atomic":"true",children:i})]})}function he({project:e,projectsPath:t}){const n=e.title.split(",")[0],a=B+t+e.fileName,l=new Set,{getLogoURI:r}=J();return e.logos.forEach(p=>{const u=r(p);l.add(u)}),s.jsxs("article",{className:`
            m-8 
            bg-gray-900 
            w-full 
            max-w-lg   
            rounded-4xl 
            shadow-xs`,children:[s.jsxs("div",{className:`
                    p-6 
                    text-center`,children:[s.jsxs("span",{className:`
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
                        rounded-sm`,children:[s.jsx("a",{href:e.URL,target:"_blank","aria-label":e.title,className:`
                            hover:scale-110 
                            transition 
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out`,children:s.jsx("img",{src:a,className:`
                                lazy 
                                w-full 
                                h-max 
                                will-change-filter 
                                filter 
                                duration-300
                                hover:drop-shadow-[0_0_2em_#646cffaa]`,alt:n,loading:"lazy"})}),s.jsx(q,{})]}),s.jsx("h4",{className:`
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading`,children:e.title}),s.jsx(de,{paths:l,repo:e.repository})]}),s.jsx("div",{className:"space-y-4",children:s.jsxs(fe,{summary:"Découvrez ce projet",children:[s.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),s.jsx("p",{children:e.contexte}),s.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),s.jsx("p",{children:e.objectifs}),s.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),s.jsx("p",{children:e.stackTechnique}),s.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),s.jsx("p",{children:e.competencesDeveloppees}),s.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),s.jsx("p",{children:e.resultatsEtImpact}),s.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),s.jsx("p",{children:e.perspectivesAmelioration})]})})]})}function me({projectsPath:e}){const[t,n]=o.useState([]),[a,l]=o.useState(!0),[r]=o.useState(null),p=o.useRef(null);return o.useEffect(()=>{let u=!0;return(async()=>{try{const m=await fetch("./data/projects.json");if(!m.ok)throw new Error(`HTTP error: ${m.status}`);const j=await m.json();u&&(n(j),l(!1))}catch(m){u&&(m instanceof SyntaxError||m instanceof ReferenceError||m instanceof TypeError||m instanceof Error)&&console.log("error: "+m.message)}})(),()=>{u=!1}},[]),a?s.jsx("p",{children:"chargement des projets"}):r?s.jsxs("p",{children:["erreur: ",r]}):s.jsx("div",{ref:p,className:`
                flex
                flex-wrap
                justify-center
                items-start 
                h-screen 
                overflow-y-auto
                relative`,children:t.map((u,S)=>s.jsx(Q,{options:{root:p.current,rootMargin:"0px",threshold:0},children:s.jsx(he,{project:u,projectsPath:e})},u.number))})}export{me as default};
