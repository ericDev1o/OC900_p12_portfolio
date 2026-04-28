import type { ReactNode } from 'react';

import { SkillsLogoProvider } from '../src/contexts/SkillsLogoProvider';

export function TestProviders({children}: {children: ReactNode}) {
    return <SkillsLogoProvider>
        {children}
    </SkillsLogoProvider>
}