import { Injectable, signal } from '@angular/core';
import { Themes } from '../enum/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private readonly themeKey = 'selectedTheme';
  readonly currentTheme = signal<Themes>(Themes.BLUE);

  setTheme(theme: Themes): void {
    localStorage.setItem(this.themeKey, theme);
    this.currentTheme.set(theme);
  }
}
