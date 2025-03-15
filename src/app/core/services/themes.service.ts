import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Themes } from '../enum/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private readonly themeKey = 'selectedTheme';
  private currentTheme = new BehaviorSubject<Themes>(Themes.Blue);

  setTheme(theme: Themes): void {
    localStorage.setItem(this.themeKey, theme);
    this.currentTheme.next(theme);
  }

  getTheme(): Themes {
    return this.currentTheme.value;
  }
}
