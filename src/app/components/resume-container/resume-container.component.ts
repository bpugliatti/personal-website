import {
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { HeaderComponent } from '../header/header.component';
import { LangugeProficiencyComponent } from '../languge-proficiency/languge-proficiency.component';
import { SkillComponent } from '../skill/skill.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CV_INFO } from '../../core/constants/cv-info.constant';
import { HeadToolbarComponent } from '../head-toolbar/head-toolbar.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-resume-container',
  standalone: true,
  imports: [
    HeaderComponent,
    HeadToolbarComponent,
    ContactItemComponent,
    SkillComponent,
    LangugeProficiencyComponent,
    ExperienceComponent,
  ],
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.scss'],
})
export class ResumeContainerComponent implements OnInit {
  #languageService = inject(LanguageService);
  #route = inject(ActivatedRoute);

  resume = computed(() => {
    const currentLang = this.#languageService.currentLang();
    return CV_INFO[currentLang];
  });

  ngOnInit() {
    this.#route.params.subscribe((params) => {
      const lang = params['lang'] as keyof typeof CV_INFO;
      if (lang && CV_INFO[lang]) {
        this.#languageService.changeLanguage(lang);
      }
    });
  }
}
