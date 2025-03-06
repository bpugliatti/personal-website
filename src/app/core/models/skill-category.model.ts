import { Skill } from './skill.model';

export interface SkillCategory {
  skillCategory: string;
  icon: string;
  skillList: Skill[];
}
