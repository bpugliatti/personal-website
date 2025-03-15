import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CV_INFO } from '../../core/constants/cv-info.constant';
import { LanguageService } from '../../core/services/language.service';
import { ThemesService } from '../../core/services/themes.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ExperienceComponent } from '../experience/experience.component';
import { HeadToolbarComponent } from '../head-toolbar/head-toolbar.component';
import { HeaderComponent } from '../header/header.component';
import { LangugeProficiencyComponent } from '../languge-proficiency/languge-proficiency.component';
import { SkillComponent } from '../skill/skill.component';

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
  #themesService: ThemesService = inject(ThemesService);
  currentTheme = this.#themesService.getTheme();

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

  getThemeClass(): string {
    return this.currentTheme; // Returns 'pink', 'blue', or 'monochrome'
  }
}
