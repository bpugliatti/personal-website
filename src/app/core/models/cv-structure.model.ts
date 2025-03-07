import { Contact } from './contact.model';
import { Experience } from './experience.model';
import { Header } from './header.model';
import { LanguageProficiency } from './language.model';
import { SkillCategory } from './skill-category.model';

export interface CVData {
  header: Header;
  jobExperiences: Experience[];
  formationExperiences: Experience[];
  contacts: Contact[];
  skills: SkillCategory[];
  languages: LanguageProficiency[];
}

export interface CVInfo {
  en: CVData;
  fr: CVData;
  it: CVData;
}
