import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
  #themesService: ThemesService = inject(ThemesService);
  #pdfService = inject(PdfService);
  #languageService = inject(LanguageService);
  #changeDetectorRef = inject(ChangeDetectorRef);

  currentTheme = this.#themesService.getTheme();
  readonly themes = Themes;

  get cvName(): string {
    const currentLang = this.#languageService.currentLang();
    return `${CV_INFO[currentLang]?.header.lastName} ${CV_INFO[currentLang]?.header.firstName}`;
  }

  switchLanguage(lang: 'en' | 'fr' | 'it'): void {
    this.#languageService.changeLanguage(lang);
  }

  switchTheme(theme: Themes): void {
    this.#themesService.setTheme(theme);
    this.#changeDetectorRef.detectChanges();
  }

  savePdf() {
    const currentLang = this.#languageService.currentLang();
    this.#pdfService.savePDF(
      'cv-container',
      `${this.cvName} Resume - ${currentLang.toUpperCase()}`,
    );
  }

  printPdf() {
    this.#pdfService.printPDF('cv-container');
  }
}
