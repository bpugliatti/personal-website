import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JobExperienceComponent } from './components/job-experience/job-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { SkillComponent } from './components/skill/skill.component';
import { LangugeProficiencyComponent } from './components/languge-proficiency/languge-proficiency.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, JobExperienceComponent, EducationComponent, ContactItemComponent, SkillComponent, LangugeProficiencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website';
}
