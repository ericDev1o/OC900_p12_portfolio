import { logos } from "../config/logoPaths";
import { LogoKey } from "../types/LogoKey";
import { createContext, useContext } from "react";

interface SkillsLogoContextType {
    getLogoURI: (key: LogoKey) => string | undefined;
}

const SkillsLogoContext = createContext<SkillsLogoContextType | undefined>(undefined);

export function SkillsLogoProvider({children}: {children: React.ReactNode}) {
    const getLogoURI = (key: LogoKey) => {
        const fileFullPath = logos[key];
        return fileFullPath ? `${fileFullPath}` : undefined;
    }

    return <SkillsLogoContext.Provider value={{getLogoURI}}>
        {children}
    </SkillsLogoContext.Provider>;
}

export function useSkillsLogo() {
    const context = useContext(SkillsLogoContext);
    if(! context)
        throw new Error('useSkillsLogo must be used within a SkillsLogoProvider');
    return context;
}