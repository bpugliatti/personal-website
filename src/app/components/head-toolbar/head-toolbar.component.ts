import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PdfService } from '../../core/services/pdf.service';
import { LanguageService } from '../../core/services/language.service';
import { CV_INFO } from '../../core/constants/cv-info.constant';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-head-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './head-toolbar.component.html',
  styleUrls: ['./head-toolbar.component.scss'],
})
export class HeadToolbarComponent {
  #pdfService = inject(PdfService);
  #languageService = inject(LanguageService);

  get cvName(): string {
    const currentLang = this.#languageService.currentLang();
    return `${CV_INFO[currentLang]?.header.lastName} ${CV_INFO[currentLang]?.header.firstName}`;
  }

  switchLanguage(lang: 'en' | 'fr' | 'it'): void {
    this.#languageService.changeLanguage(lang);
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
