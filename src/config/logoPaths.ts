import type { LogoKey } from "@/types/LogoKey";

export const basePath = import.meta.env.BASE_URL || '/';
export const logosPaths = 'logos/';
const fullPath = basePath + logosPaths;

export const logos: Record<LogoKey, string> = {
    HTML: fullPath + 'HTML5.webp',
    CSS: fullPath + 'CSS3.webp',
    SCSS: fullPath + 'SCSS.webp',
    vite: fullPath + 'vite.webp',
    JS: fullPath + 'JS.webp',
    TS: fullPath + 'TS.webp',
    react: fullPath + 'react.webp',
    linkedIn: fullPath + 'linkedIn.webp',
    gitHub: fullPath + 'gitHub.webp',
    E: fullPath + 'logo.webp'
}