import type { LogoKey } from '@/custom/types/LogoKey';
import type { SkillData } from '../custom/types/SkillData';

import skillsData from '/public/data/skills.json';

const skillsMap = new Map<LogoKey, SkillData>(
  (skillsData as SkillData[]).map(skill => [skill.key, skill])
);

export function getSkillData(key: LogoKey): SkillData | undefined {
  return skillsMap.get(key);
}