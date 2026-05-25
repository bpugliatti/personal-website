import {
  Directive,
  effect,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';
import { Themes } from '../enum/themes.enum';
import { ThemesService } from '../services/themes.service';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private themeService = inject(ThemesService);
  private previousTheme: Themes | null = null;

  constructor() {
    effect(() => {
      this.applyTheme(this.themeService.currentTheme());
    });
  }

  private applyTheme(theme: Themes) {
    const element = this.el.nativeElement;

    if (this.previousTheme) {
      this.renderer.removeClass(element, this.previousTheme);
    }

    this.renderer.addClass(element, theme);
    this.previousTheme = theme;
  }
}
