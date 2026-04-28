import type { LogoKey } from './LogoKey';

export type SkillsLogoContextType = {
    getLogoURI: (key: LogoKey) => string | undefined;
}