import { Component } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { EducationComponent } from '../education/education.component';
import { HeaderComponent } from '../header/header.component';
import { JobExperienceComponent } from '../job-experience/job-experience.component';
import { LangugeProficiencyComponent } from '../languge-proficiency/languge-proficiency.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-resume-container',
  imports: [HeaderComponent, JobExperienceComponent, EducationComponent, ContactItemComponent, SkillComponent, LangugeProficiencyComponent],
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.scss'
})
export class ResumeContainerComponent {

}
