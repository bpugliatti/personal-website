import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResumeContainerComponent } from './resume-container.component';
import { LanguageService } from '../../core/services/language.service';
import { ThemesService } from '../../core/services/themes.service';
import { Themes } from '../../core/enum/themes.enum';

describe('ResumeContainerComponent', () => {
  let component: ResumeContainerComponent;
  let fixture: ComponentFixture<ResumeContainerComponent>;
  let languageServiceSpy: jasmine.SpyObj<LanguageService>;
  let paramsSubject: Subject<Record<string, string>>;

  beforeEach(async () => {
    paramsSubject = new Subject();

    languageServiceSpy = jasmine.createSpyObj(
      'LanguageService',
      ['changeLanguage'],
      {
        currentLang: signal<'en' | 'fr' | 'it'>('en'),
      },
    );

    const themesServiceStub = {
      currentTheme: signal<Themes>(Themes.BLUE),
      setTheme: jasmine.createSpy('setTheme'),
    };

    await TestBed.configureTestingModule({
      imports: [ResumeContainerComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceSpy },
        { provide: ThemesService, useValue: themesServiceStub },
        {
          provide: ActivatedRoute,
          useValue: { params: paramsSubject.asObservable() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeLanguage with the route lang param when it is valid', () => {
    paramsSubject.next({ lang: 'fr' });
    expect(languageServiceSpy.changeLanguage).toHaveBeenCalledWith('fr');
  });

  it('should call changeLanguage for each valid supported language', () => {
    paramsSubject.next({ lang: 'it' });
    expect(languageServiceSpy.changeLanguage).toHaveBeenCalledWith('it');
  });

  it('should not call changeLanguage for an unsupported lang param', () => {
    paramsSubject.next({ lang: 'de' });
    expect(languageServiceSpy.changeLanguage).not.toHaveBeenCalled();
  });

  it('should return the resume computed from currentLang', () => {
    const resume = component.resume();
    expect(resume).toBeDefined();
    expect(resume.header).toBeDefined();
    expect(resume.jobExperiences).toBeDefined();
  });
});
