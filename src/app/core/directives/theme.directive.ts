import { DestroyRef, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Themes } from '../enum/themes.enum';
import { ThemesService } from '../services/themes.service';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit {
  private previousTheme: Themes | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemesService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit() {
    this.themeService
      .getThemeObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((theme: Themes) => {
        this.applyTheme(theme);
      });
  }

  private applyTheme(theme: Themes) {
    const element = this.el.nativeElement;

    // Remove only the previously applied theme class
    if (this.previousTheme) {
      this.renderer.removeClass(element, this.previousTheme);
    }

    // Add new theme class
    this.renderer.addClass(element, theme);

    // Store the applied theme for next time
    this.previousTheme = theme;
  }
}
