import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CV_INFO } from '../../core/constants/cv-info.constant';
import { ThemeDirective } from '../../core/directives/theme.directive';
import { Themes } from '../../core/enum/themes.enum';
import { LanguageService } from '../../core/services/language.service';
import { PdfService } from '../../core/services/pdf.service';
import { ThemesService } from '../../core/services/themes.service';

enum Languages {
  ENG = 'en',
  FR = 'fr',
  IT = 'it',
}

@Component({
  selector: 'app-head-toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ThemeDirective,
  ],
  templateUrl: './head-toolbar.component.html',
  styleUrls: ['./head-toolbar.component.scss'],
})
export class HeadToolbarComponent {
  #themesService = inject(ThemesService);
  #pdfService = inject(PdfService);
  #languageService = inject(LanguageService);

  readonly themes = Object.values(Themes);
  readonly languages = Object.values(Languages);

  get cvName(): string {
    const currentLang = this.#languageService.currentLang();
    return `${CV_INFO[currentLang]?.header.lastName} ${CV_INFO[currentLang]?.header.firstName}`;
  }

  switchLanguage(lang: Languages): void {
    this.#languageService.changeLanguage(lang);
  }

  switchTheme(theme: Themes): void {
    this.#themesService.setTheme(theme);
  }

  printPdf(): void {
    this.#pdfService.print();
  }

  downloadPdf(): void {
    const lang = this.#languageService.currentLang();
    const fileNames: Record<string, string> = {
      en: 'barbara pugliatti - cv.pdf',
      fr: 'barbara pugliatti - cv - FR.pdf',
      it: 'barbara pugliatti - cv - IT.pdf',
    };
    const link = document.createElement('a');
    link.href = `/pdf/${fileNames[lang]}`;
    link.download = fileNames[lang];
    link.click();
  }
}
