import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';
import { ThemesService } from '../services/themes.service';
import { Themes } from '../enum/themes.enum';

@Component({
  template: '<div appTheme></div>',
  imports: [ThemeDirective],
})
class TestHostComponent {}

describe('ThemeDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let themesService: ThemesService;
  let divElement: HTMLElement;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    themesService = TestBed.inject(ThemesService);
    fixture.detectChanges();
    divElement = fixture.nativeElement.querySelector('div');
  });

  it('should apply the initial theme class', () => {
    expect(divElement.classList).toContain(Themes.BLUE);
  });

  it('should remove the previous theme class and add the new one on theme change', () => {
    themesService.setTheme(Themes.GREEN);
    fixture.detectChanges();
    expect(divElement.classList).not.toContain(Themes.BLUE);
    expect(divElement.classList).toContain(Themes.GREEN);
  });

  it('should correctly update the class across multiple theme switches', () => {
    themesService.setTheme(Themes.PINK);
    fixture.detectChanges();
    themesService.setTheme(Themes.MONOCHROME);
    fixture.detectChanges();
    expect(divElement.classList).not.toContain(Themes.PINK);
    expect(divElement.classList).toContain(Themes.MONOCHROME);
  });
});
