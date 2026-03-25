import { 
    createContext, 
    type JSX, 
    type ReactNode, 
    useContext } 
from 'react';

import { logos } from '../config/logoPathsConfig';

import type { LogoKey } from '../custom/types/LogoKey';

interface SkillsLogoContextType {
    getLogoURI: (key: LogoKey) => string | undefined;
}

const SkillsLogoContext = createContext<SkillsLogoContextType | undefined>(undefined);

/**
 * Logo name keys defined in /src/types/LogoKey.ts 
 * have a path defined in /src/config/LogoPaths.ts.
 * It avoids path hard-coding in components to ease maintainability.
 * 
 * @param {ReactNode} children to wrap in the Provider see ../main.tsx
 * @returns {JSX.Element} the context Provider with its getLogoURI function that wraps children elements
 */
export function SkillsLogoProvider({children}: {children: ReactNode}): JSX.Element {
    const getLogoURI = (key: LogoKey) => {
        const fileFullPath = logos[key];
        return fileFullPath ? `${fileFullPath}` : undefined;
    }

    return <SkillsLogoContext.Provider value={{getLogoURI}}>
        {children}
    </SkillsLogoContext.Provider>;
}

/**
 * Hook to get SkillsLogoContext
 * It must be used as a SkillsLogoProvider child.
 * 
 * @throws {Error} if the hook is used outside of its provider.
 * @returns {SkillsLogoContextType} object. It's getLogoURI function
 * returns for a given key its corresponding logo image file URI.
 */
export function useSkillsLogo(): SkillsLogoContextType {
    const context = useContext(SkillsLogoContext);
    if(! context)
        throw new Error('useSkillsLogo must be used within a SkillsLogoProvider');
    return context;
}