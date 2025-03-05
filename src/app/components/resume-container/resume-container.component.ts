import { Component } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { HeaderComponent } from '../header/header.component';
import { LangugeProficiencyComponent } from '../languge-proficiency/languge-proficiency.component';
import { SkillComponent } from '../skill/skill.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-resume-container',
  imports: [
    HeaderComponent,
    ContactItemComponent,
    SkillComponent,
    LangugeProficiencyComponent,
    ExperienceComponent,
  ],
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.scss',
})
export class ResumeContainerComponent {}
