import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageProficiencyComponent } from './language-proficiency.component';
import { LanguageProficiency } from '../../core/models/language.model';

describe('LanguageProficiencyComponent', () => {
  let component: LanguageProficiencyComponent;
  let fixture: ComponentFixture<LanguageProficiencyComponent>;

  const mockLanguage: LanguageProficiency = {
    language: 'English',
    proficiency: 'Native',
    proficiencyLevel: '100',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageProficiencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageProficiencyComponent);
    component = fixture.componentInstance;
    component.language = mockLanguage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the language input bound correctly', () => {
    expect(component.language).toEqual(mockLanguage);
  });

  it('should have mode set to "determinate" by default', () => {
    expect(component.mode).toBe('determinate');
  });

  it('should reflect updated language input', () => {
    const updated: LanguageProficiency = {
      ...mockLanguage,
      proficiency: 'Fluent',
      proficiencyLevel: '85',
    };
    component.language = updated;
    fixture.detectChanges();
    expect(component.language.proficiency).toBe('Fluent');
    expect(component.language.proficiencyLevel).toBe('85');
  });
});
