import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let routerMock: { url: string; navigate: jest.Mock };

  beforeEach(() => {
    routerMock = { url: '/en/home', navigate: jest.fn() };

    TestBed.configureTestingModule({
      providers: [LanguageService, { provide: Router, useValue: routerMock }],
    });

    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default language "en"', () => {
    expect(service.currentLang()).toBe('en');
  });

  it('should update the currentLang signal when language changes', () => {
    service.changeLanguage('fr');
    expect(service.currentLang()).toBe('fr');
  });

  it('should navigate to the new language route when url does not match', () => {
    routerMock.url = '/en/home';
    service.changeLanguage('fr');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/fr/home']);
  });

  it('should not navigate if current url segment already matches the new language', () => {
    routerMock.url = '/fr/home';
    service.changeLanguage('fr');
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should not change language or navigate if requested language is already active', () => {
    service.changeLanguage('en');
    expect(routerMock.navigate).not.toHaveBeenCalled();
    expect(service.currentLang()).toBe('en');
  });

  it('should support all three language codes', () => {
    service.changeLanguage('it');
    expect(service.currentLang()).toBe('it');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/it/home']);
  });
});
