import { ReactNode } from "react";

import { SkillsLogoProvider } from '../src/contexts/SkillsLogoContext';

export function TestProviders({children}: {children: ReactNode}) {
    return <SkillsLogoProvider>
        {children}
    </SkillsLogoProvider>
}