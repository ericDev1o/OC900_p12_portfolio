import type { LogoKey } from '../custom/types/LogoKey';

import { logos } from '../config/logoPathsConfig';

export function getLogoURI(key: LogoKey): string | undefined {
    const fileFullPath = logos[key];
    return fileFullPath ? `${fileFullPath}` : undefined;
}