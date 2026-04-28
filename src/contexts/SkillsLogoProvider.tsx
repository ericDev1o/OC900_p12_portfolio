import { 
    type JSX, 
    type ReactNode
} from 'react';

import { SkillsLogoContext } from './SkillsLogoContext';

import { getLogoURI } from '../services/logoService';

/**
 * Logo name keys defined in /src/types/LogoKey.ts 
 * have a path defined in /src/config/LogoPaths.ts.
 * It avoids path hard-coding in components to ease maintainability.
 * 
 * @param {ReactNode} children to wrap in the Provider see ../main.tsx
 * @returns {JSX.Element} the context Provider with its getLogoURI function that wraps children elements
 */
export function SkillsLogoProvider({children}: {children: ReactNode}): JSX.Element {
    return <SkillsLogoContext.Provider value={{getLogoURI}}>
        {children}
    </SkillsLogoContext.Provider>;
}