import { TestBed } from '@angular/core/testing';
import { ThemesService } from './themes.service';
import { Themes } from '../enum/themes.enum';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default theme BLUE', () => {
    expect(service.currentTheme()).toBe(Themes.BLUE);
  });

  it('should update currentTheme signal when setTheme is called', () => {
    service.setTheme(Themes.GREEN);
    expect(service.currentTheme()).toBe(Themes.GREEN);
  });

  it('should persist selected theme to localStorage', () => {
    service.setTheme(Themes.PINK);
    expect(localStorage.getItem('selectedTheme')).toBe(Themes.PINK);
  });

  it('should update localStorage when theme changes again', () => {
    service.setTheme(Themes.GREEN);
    service.setTheme(Themes.MONOCHROME);
    expect(localStorage.getItem('selectedTheme')).toBe(Themes.MONOCHROME);
    expect(service.currentTheme()).toBe(Themes.MONOCHROME);
  });
});
