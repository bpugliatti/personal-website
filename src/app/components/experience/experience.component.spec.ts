import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { Experience } from '../../core/models/experience.model';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  const mockExperience: Experience = {
    experienceName: 'FRONT-END DEVELOPER',
    experienceDateStart: 'Jan 2020',
    experienceDateEnd: 'Dec 2022',
    companyName: 'Acme Corp',
    location: 'Paris, France',
    extraDescription: '<p>Built scalable UI components.</p>',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.experience = mockExperience;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the experience input bound correctly', () => {
    expect(component.experience).toEqual(mockExperience);
  });

  it('should reflect updated experience input', () => {
    const updated: Experience = { ...mockExperience, companyName: 'NewCorp' };
    component.experience = updated;
    fixture.detectChanges();
    expect(component.experience.companyName).toBe('NewCorp');
  });
});
