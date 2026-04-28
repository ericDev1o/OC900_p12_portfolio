import { createContext } from 'react';

import type { SkillsLogoContextType } from '../custom/types/SkillsLogoContext';

export const SkillsLogoContext = createContext<SkillsLogoContextType | undefined>(undefined);