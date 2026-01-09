import{r as i,a as H,g as G,b as K,j as s,R as X,c as Y,u as B,L as J,d as Q}from"./index-ABNPatss.js";const V=(e,n,t,a)=>{const c=[t,{code:n,...a||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(c,"warn","react-i18next::",!0);j(c[0])&&(c[0]=`react-i18next:: ${c[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...c):console?.warn&&console.warn(...c)},D={},$=(e,n,t,a)=>{j(t)&&D[t]||(j(t)&&(D[t]=new Date),V(e,n,t,a))},F=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout(()=>{e.off("initialized",t)},0),n()};e.on("initialized",t)}},O=(e,n,t)=>{e.loadNamespaces(n,F(e,t))},U=(e,n,t,a)=>{if(j(t)&&(t=[t]),e.options.preload&&e.options.preload.indexOf(n)>-1)return O(e,t,a);t.forEach(c=>{e.options.ns.indexOf(c)<0&&e.options.ns.push(c)}),e.loadLanguages(n,F(e,a))},Z=(e,n,t={})=>!n.languages||!n.languages.length?($(n,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:n.languages}),!0):n.hasLoadedNamespace(e,{lng:t.lng,precheck:(a,c)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!c(a.isLanguageChangingTo,e))return!1}}),j=e=>typeof e=="string",ee=e=>typeof e=="object"&&e!==null,ne=i.createContext();class te{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var _={exports:{}},T={};var q;function se(){if(q)return T;q=1;var e=H();function n(o,f){return o===f&&(o!==0||1/o===1/f)||o!==o&&f!==f}var t=typeof Object.is=="function"?Object.is:n,a=e.useState,c=e.useEffect,r=e.useLayoutEffect,h=e.useDebugValue;function u(o,f){var b=f(),p=a({inst:{value:b,getSnapshot:f}}),y=p[0].inst,w=p[1];return r(function(){y.value=b,y.getSnapshot=f,S(y)&&w({inst:y})},[o,b,f]),c(function(){return S(y)&&w({inst:y}),o(function(){S(y)&&w({inst:y})})},[o]),h(b),b}function S(o){var f=o.getSnapshot;o=o.value;try{var b=f();return!t(o,b)}catch{return!0}}function x(o,f){return f()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:u;return T.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v,T}var A;function re(){return A||(A=1,_.exports=se()),_.exports}var ae=re();const oe=(e,n)=>j(n)?n:ee(n)&&j(n.defaultValue)?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,ie={t:oe,ready:!1},ce=()=>()=>{},le=(e,n={})=>{const{i18n:t}=n,{i18n:a,defaultNS:c}=i.useContext(ne)||{},r=t||a||G();r&&!r.reportNamespaces&&(r.reportNamespaces=new te),r||$(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const h=i.useMemo(()=>({...K(),...r?.options?.react,...n}),[r,n]),{useSuspense:u,keyPrefix:S}=h,x=c||r?.options?.defaultNS,v=j(x)?[x]:x||["translation"],o=i.useMemo(()=>v,v);r?.reportNamespaces?.addUsedNamespaces?.(o);const f=i.useRef(0),b=i.useCallback(d=>{if(!r)return ce;const{bindI18n:l,bindI18nStore:g}=h,m=()=>{f.current+=1,d()};return l&&r.on(l,m),g&&r.store.on(g,m),()=>{l&&l.split(" ").forEach(C=>r.off(C,m)),g&&g.split(" ").forEach(C=>r.store.off(C,m))}},[r,h]),p=i.useRef(),y=i.useCallback(()=>{if(!r)return ie;const d=!!(r.isInitialized||r.initializedStoreOnce)&&o.every(W=>Z(W,r,h)),l=n.lng||r.language,g=f.current,m=p.current;if(m&&m.ready===d&&m.lng===l&&m.keyPrefix===S&&m.revision===g)return m;const z={t:r.getFixedT(l,h.nsMode==="fallback"?o:o[0],S),ready:d,lng:l,keyPrefix:S,revision:g};return p.current=z,z},[r,o,S,h,n.lng]),[w,k]=i.useState(0),{t:E,ready:N}=ae.useSyncExternalStore(b,y,y);i.useEffect(()=>{if(r&&!N&&!u){const d=()=>k(l=>l+1);n.lng?U(r,n.lng,o,d):O(r,o,d)}},[r,n.lng,o,N,u,w]);const R=r||{},L=i.useRef(null),I=i.useRef(),P=d=>{const l=Object.getOwnPropertyDescriptors(d);l.__original&&delete l.__original;const g=Object.create(Object.getPrototypeOf(d),l);if(!Object.prototype.hasOwnProperty.call(g,"__original"))try{Object.defineProperty(g,"__original",{value:d,writable:!1,enumerable:!1,configurable:!1})}catch{}return g},M=i.useMemo(()=>{const d=R,l=d?.language;let g=d;d&&(L.current&&L.current.__original===d?I.current!==l?(g=P(d),L.current=g,I.current=l):g=L.current:(g=P(d),L.current=g,I.current=l));const m=[E,g,N];return m.t=E,m.i18n=g,m.ready=N,m},[E,R,N,R.resolvedLanguage,R.language,R.languages]);if(r&&u&&!N)throw new Promise(d=>{const l=()=>d();n.lng?U(r,n.lng,o,l):O(r,o,l)});return M};function ue({logoPath:e,repo:n}){const t=e.split("/"),c=t[t.length-1].split(".")[0];return s.jsx("section",{children:s.jsx("a",{href:n,target:"_blank","aria-label":n,children:s.jsx("img",{src:e,alt:c,loading:"lazy",className:"m-2"})})})}function de({paths:e,repo:n}){let t=new Set;return e.forEach(a=>{t.add(s.jsx(ue,{logoPath:a,repo:n},a))}),t.size>1?s.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:t}):t.size===1?t:s.jsx(s.Fragment,{})}function fe({summary:e,children:n}){const t=i.useRef(null),[a,c]=i.useState(!1),[r,h]=i.useState("0px"),[u,S]=i.useState(!1),[x,v]=i.useState(!1),o=X.useId(),f=()=>{v(!0),a?(h("0px"),c(!1)):(S(!0),c(!0))},{t:b}=le();return i.useEffect(()=>{u&&a&&t.current&&requestAnimationFrame(()=>{const p=t.current?.scrollHeight;h(`${p}px`)})},[u,a]),i.useEffect(()=>{const p=t.current;if(!p)return;const y=k=>{k.propertyName==="max-height"&&(v(!1),a||(S(!1),h("0px")))},w="ontransitionend"in window||"onwebkittransitionend"in window;if(w)return p.addEventListener("transitionend",y),()=>{p.removeEventListener("transitionend",y)};if(!w){const E=setTimeout(()=>{y({propertyName:"max-height"})},600);return()=>clearTimeout(E)}},[a]),i.useEffect(()=>{a&&u&&t.current&&t.current.focus()},[a,u]),s.jsxs("div",{className:`
      w-full 
      overflow-hidden 
      rounded 
      shadow `,children:[s.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":a,"aria-controls":o,onClick:f,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),f())},className:`
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
            transform ${a?"rotate-180":""}`,children:"▼"})]}),s.jsx("div",{id:o,ref:t,tabIndex:-1,style:{maxHeight:r},className:`
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out`,children:u&&s.jsx("div",{className:"px-4 py-3",children:n})}),s.jsx("div",{"aria-live":"polite",className:"sr-only","aria-atomic":"true",children:b(a?"section.opened":"section.closed")})]})}function ge({project:e,projectsPath:n}){const t=e.title.split(",")[0],a=Y+n+e.fileName,c=new Set,{getLogoURI:r}=B();return e.logos.forEach(h=>{const u=r(h);c.add(u)}),s.jsxs("article",{className:`
            my-8 
            mx-4 
            bg-gray-900  
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
                                hover:drop-shadow-[0_0_2em_#646cffaa]`,alt:t,loading:"lazy"})}),s.jsx(J,{})]}),s.jsx("h4",{className:`
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading`,children:e.title}),s.jsx(de,{paths:c,repo:e.repository})]}),s.jsx("div",{className:"space-y-4",children:s.jsxs(fe,{summary:"Découvrez ce projet",children:[s.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),s.jsx("p",{children:e.contexte}),s.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),s.jsx("p",{children:e.objectifs}),s.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),s.jsx("p",{children:e.stackTechnique}),s.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),s.jsx("p",{children:e.competencesDeveloppees}),s.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),s.jsx("p",{children:e.resultatsEtImpact}),s.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),s.jsx("p",{children:e.perspectivesAmelioration})]})})]})}function me({projectsPath:e}){const[n,t]=i.useState([]),[a,c]=i.useState(!0),[r]=i.useState(null),h=i.useRef(null);return i.useEffect(()=>{let u=!0;return(async()=>{try{const x=await fetch("./data/projects.json");if(!x.ok)throw new Error(`HTTP error: ${x.status}`);const v=await x.json();u&&(t(v),c(!1))}catch(x){u&&(x instanceof SyntaxError||x instanceof ReferenceError||x instanceof TypeError||x instanceof Error)&&console.log("error: "+x.message)}})(),()=>{u=!1}},[]),a?s.jsx("p",{children:"chargement des projets"}):r?s.jsxs("p",{children:["erreur: ",r]}):s.jsx("div",{ref:h,className:`
                flex
                flex-col
                justify-center
                items-center 
                h-screen 
                overflow-y-auto
                relative`,children:n.map(u=>s.jsx(Q,{options:{root:h.current,rootMargin:"0px",threshold:0},children:s.jsx(ge,{project:u,projectsPath:e})},u.number))})}export{me as default};
