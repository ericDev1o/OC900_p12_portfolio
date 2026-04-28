import { useContext } from 'react';

import type { SkillsLogoContextType } from '../../custom/types/SkillsLogoContext';

import { SkillsLogoContext } from '../../contexts/SkillsLogoContext';

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