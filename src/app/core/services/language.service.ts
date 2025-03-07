import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang = signal<'en' | 'fr' | 'it'>('en');

  #router = inject(Router);

  changeLanguage(lang: 'en' | 'fr' | 'it'): void {
    if (this.currentLang() !== lang) {
      this.currentLang.set(lang);

      const currentUrl = this.#router.url.split('/')[1];
      if (currentUrl !== lang) {
        this.#router.navigate([`/${lang}/home`]);
      }
    }
  }
}
