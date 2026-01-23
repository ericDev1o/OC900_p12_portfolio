import{r as c,a as H,g as G,b as K,j as s,c as X,u as Y,L as B,d as J}from"./index-BSzBZph0.js";const Q=(e,n,t,a)=>{const l=[t,{code:n,...a||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(l,"warn","react-i18next::",!0);w(l[0])&&(l[0]=`react-i18next:: ${l[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...l):console?.warn&&console.warn(...l)},A={},M=(e,n,t,a)=>{w(t)&&A[t]||(w(t)&&(A[t]=new Date),Q(e,n,t,a))},$=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout(()=>{e.off("initialized",t)},0),n()};e.on("initialized",t)}},O=(e,n,t)=>{e.loadNamespaces(n,$(e,t))},U=(e,n,t,a)=>{if(w(t)&&(t=[t]),e.options.preload&&e.options.preload.indexOf(n)>-1)return O(e,t,a);t.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(n,$(e,a))},V=(e,n,t={})=>!n.languages||!n.languages.length?(M(n,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:n.languages}),!0):n.hasLoadedNamespace(e,{lng:t.lng,precheck:(a,l)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}),w=e=>typeof e=="string",Z=e=>typeof e=="object"&&e!==null,ee=c.createContext();class ne{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var k={exports:{}},C={};var D;function te(){if(D)return C;D=1;var e=H();function n(o,i){return o===i&&(o!==0||1/o===1/i)||o!==o&&i!==i}var t=typeof Object.is=="function"?Object.is:n,a=e.useState,l=e.useEffect,r=e.useLayoutEffect,m=e.useDebugValue;function d(o,i){var x=i(),b=a({inst:{value:x,getSnapshot:i}}),S=b[0].inst,v=b[1];return r(function(){S.value=x,S.getSnapshot=i,y(S)&&v({inst:S})},[o,x,i]),l(function(){return y(S)&&v({inst:S}),o(function(){y(S)&&v({inst:S})})},[o]),m(x),x}function y(o){var i=o.getSnapshot;o=o.value;try{var x=i();return!t(o,x)}catch{return!0}}function g(o,i){return i()}var N=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:d;return C.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:N,C}var q;function se(){return q||(q=1,k.exports=te()),k.exports}var re=se();const ae=(e,n)=>w(n)?n:Z(n)&&w(n.defaultValue)?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,oe={t:ae,ready:!1},ie=()=>()=>{},ce=(e,n={})=>{const{i18n:t}=n,{i18n:a,defaultNS:l}=c.useContext(ee)||{},r=t||a||G();r&&!r.reportNamespaces&&(r.reportNamespaces=new ne),r||M(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const m=c.useMemo(()=>({...K(),...r?.options?.react,...n}),[r,n]),{useSuspense:d,keyPrefix:y}=m,g=l||r?.options?.defaultNS,N=w(g)?[g]:g||["translation"],o=c.useMemo(()=>N,N);r?.reportNamespaces?.addUsedNamespaces?.(o);const i=c.useRef(0),x=c.useCallback(f=>{if(!r)return ie;const{bindI18n:u,bindI18nStore:h}=m,p=()=>{i.current+=1,f()};return u&&r.on(u,p),h&&r.store.on(h,p),()=>{u&&u.split(" ").forEach(I=>r.off(I,p)),h&&h.split(" ").forEach(I=>r.store.off(I,p))}},[r,m]),b=c.useRef(),S=c.useCallback(()=>{if(!r)return oe;const f=!!(r.isInitialized||r.initializedStoreOnce)&&o.every(W=>V(W,r,m)),u=n.lng||r.language,h=i.current,p=b.current;if(p&&p.ready===f&&p.lng===u&&p.keyPrefix===y&&p.revision===h)return p;const z={t:r.getFixedT(u,m.nsMode==="fallback"?o:o[0],y),ready:f,lng:u,keyPrefix:y,revision:h};return b.current=z,z},[r,o,y,m,n.lng]),[v,L]=c.useState(0),{t:_,ready:j}=re.useSyncExternalStore(x,S,S);c.useEffect(()=>{if(r&&!j&&!d){const f=()=>L(u=>u+1);n.lng?U(r,n.lng,o,f):O(r,o,f)}},[r,n.lng,o,j,d,v]);const E=r||{},R=c.useRef(null),T=c.useRef(),P=f=>{const u=Object.getOwnPropertyDescriptors(f);u.__original&&delete u.__original;const h=Object.create(Object.getPrototypeOf(f),u);if(!Object.prototype.hasOwnProperty.call(h,"__original"))try{Object.defineProperty(h,"__original",{value:f,writable:!1,enumerable:!1,configurable:!1})}catch{}return h},F=c.useMemo(()=>{const f=E,u=f?.language;let h=f;f&&(R.current&&R.current.__original===f?T.current!==u?(h=P(f),R.current=h,T.current=u):h=R.current:(h=P(f),R.current=h,T.current=u));const p=[_,h,j];return p.t=_,p.i18n=h,p.ready=j,p},[_,E,j,E.resolvedLanguage,E.language,E.languages]);if(r&&d&&!j)throw new Promise(f=>{const u=()=>f();n.lng?U(r,n.lng,o,u):O(r,o,u)});return F};function le({logoPath:e,repo:n}){const t=e.split("/"),l=t[t.length-1].split(".")[0];return s.jsx("section",{children:s.jsx("a",{href:n,target:"_blank","aria-label":n,children:s.jsx("img",{src:e,alt:l,loading:"lazy",className:"m-2"})})})}function ue({paths:e,repo:n}){let t=new Set;return e.forEach(a=>{t.add(s.jsx(le,{logoPath:a,repo:n},a))}),t.size>1?s.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:t}):t.size===1?t:s.jsx(s.Fragment,{})}function de({summary:e,children:n}){const t=c.useRef(null),[a,l]=c.useState(!1),[r,m]=c.useState("0px"),[d,y]=c.useState(!1),g=c.useId(),N=()=>{a?(m("0px"),l(!1)):(y(!0),l(!0))},{t:o}=ce();return c.useEffect(()=>{d&&a&&t.current&&requestAnimationFrame(()=>{const i=t.current?.scrollHeight;m(`${i}px`)})},[d,a]),c.useEffect(()=>{const i=t.current;if(!i)return;const x=L=>{L.propertyName==="max-height"&&(a||(y(!1),m("0px")))};if("ontransitionend"in window||"onwebkittransitionend"in window)return i.addEventListener("transitionend",x),()=>{i.removeEventListener("transitionend",x)};const v=setTimeout(()=>{x({propertyName:"max-height"})},600);return()=>clearTimeout(v)},[a]),c.useEffect(()=>{a&&d&&t.current&&t.current.focus()},[a,d]),s.jsxs("div",{className:`
      w-full 
      overflow-hidden 
      rounded 
      shadow `,children:[s.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":a,"aria-controls":g,onClick:N,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),N())},className:`
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
            transform ${a?"rotate-180":""}`,children:"▼"})]}),s.jsx("div",{id:g,ref:t,tabIndex:-1,style:{maxHeight:r},className:`
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out`,children:d&&s.jsx("div",{className:"px-4 py-3",children:n})}),s.jsx("div",{"aria-live":"polite",className:"sr-only","aria-atomic":"true",children:o(a?"section.opened":"section.closed")})]})}function fe({project:e,projectsPath:n}){const t=e.title.split(",")[0],a=X+n+e.fileName,l=new Set,{getLogoURI:r}=Y();return e.logos.forEach(m=>{const d=r(m);l.add(d)}),s.jsxs("article",{className:`
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
                                hover:drop-shadow-[0_0_2em_#646cffaa]`,alt:t,loading:"lazy"})}),s.jsx(B,{})]}),s.jsx("h4",{className:`
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading`,children:e.title}),s.jsx(ue,{paths:l,repo:e.repository})]}),s.jsx("div",{className:"space-y-4",children:s.jsxs(de,{summary:"Découvrez ce projet",children:[s.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),s.jsx("p",{children:e.contexte}),s.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),s.jsx("p",{children:e.objectifs}),s.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),s.jsx("p",{children:e.stackTechnique}),s.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),s.jsx("p",{children:e.competencesDeveloppees}),s.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),s.jsx("p",{children:e.resultatsEtImpact}),s.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),s.jsx("p",{children:e.perspectivesAmelioration})]})})]})}function ge({projectsPath:e}){const[n,t]=c.useState([]),[a,l]=c.useState(!0),[r]=c.useState(null),m=c.useRef(null);return c.useEffect(()=>{let d=!0;return(async()=>{try{const g=await fetch("./data/projects.json");if(!g.ok)throw new Error(`HTTP error: ${g.status}`);const N=await g.json();d&&(t(N),l(!1))}catch(g){d&&(g instanceof SyntaxError||g instanceof ReferenceError||g instanceof TypeError||g instanceof Error)&&console.log("error: "+g.message)}})(),()=>{d=!1}},[]),a?s.jsx("p",{children:"chargement des projets"}):r?s.jsxs("p",{children:["erreur: ",r]}):s.jsx("div",{ref:m,className:`
                flex
                flex-col
                justify-center
                items-center 
                h-screen 
                overflow-y-auto
                relative`,children:n.map(d=>s.jsx(J,{options:{root:m.current,rootMargin:"0px",threshold:0},children:s.jsx(fe,{project:d,projectsPath:e})},d.number))})}export{ge as default};
