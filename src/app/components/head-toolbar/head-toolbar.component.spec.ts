import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { HeadToolbarComponent } from './head-toolbar.component';
import { LanguageService } from '../../core/services/language.service';
import { ThemesService } from '../../core/services/themes.service';
import { PdfService } from '../../core/services/pdf.service';
import { Themes } from '../../core/enum/themes.enum';

describe('HeadToolbarComponent', () => {
  let component: HeadToolbarComponent;
  let fixture: ComponentFixture<HeadToolbarComponent>;
  let languageServiceSpy: jasmine.SpyObj<LanguageService>;
  let themesServiceSpy: jasmine.SpyObj<ThemesService>;
  let pdfServiceSpy: jasmine.SpyObj<PdfService>;

  beforeEach(async () => {
    languageServiceSpy = jasmine.createSpyObj(
      'LanguageService',
      ['changeLanguage'],
      {
        currentLang: signal<'en' | 'fr' | 'it'>('en'),
      },
    );
    themesServiceSpy = jasmine.createSpyObj('ThemesService', ['setTheme'], {
      currentTheme: signal<Themes>(Themes.BLUE),
    });
    pdfServiceSpy = jasmine.createSpyObj('PdfService', ['print']);

    await TestBed.configureTestingModule({
      imports: [HeadToolbarComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceSpy },
        { provide: ThemesService, useValue: themesServiceSpy },
        { provide: PdfService, useValue: pdfServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose all available themes', () => {
    expect(component.themes).toEqual(Object.values(Themes));
  });

  it('should expose all available languages', () => {
    expect(component.languages as string[]).toEqual(['en', 'fr', 'it']);
  });

  it('should return the full name from cvName getter for the current language', () => {
    const name = component.cvName;
    expect(name).toBeTruthy();
    expect(typeof name).toBe('string');
  });

  it('should call languageService.changeLanguage when switchLanguage is called', () => {
    component.switchLanguage('fr' as any);
    expect(languageServiceSpy.changeLanguage).toHaveBeenCalledWith('fr' as any);
  });

  it('should call themesService.setTheme when switchTheme is called', () => {
    component.switchTheme(Themes.GREEN);
    expect(themesServiceSpy.setTheme).toHaveBeenCalledWith(Themes.GREEN);
  });

  it('should call pdfService.print when printPdf is called', () => {
    component.printPdf();
    expect(pdfServiceSpy.print).toHaveBeenCalledTimes(1);
  });
});
