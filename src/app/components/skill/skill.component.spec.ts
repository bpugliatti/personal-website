import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillComponent } from './skill.component';
import { SkillCategory } from '../../core/models/skill-category.model';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  const mockSkillGroups: SkillCategory[] = [
    {
      skillCategory: 'Frontend',
      icon: 'code',
      skillList: [{ skillName: 'Angular' }, { skillName: 'TypeScript' }],
    },
    {
      skillCategory: 'Backend',
      icon: 'storage',
      skillList: [],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    component.skillGroups = mockSkillGroups;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the skillGroups input bound correctly', () => {
    expect(component.skillGroups).toEqual(mockSkillGroups);
  });

  it('should join skill names with ", " in formattedSkillGroups', () => {
    const formatted = component.formattedSkillGroups;
    expect(formatted[0].formattedSkills).toBe('Angular, TypeScript');
  });

  it('should return "No skills available" for a group with an empty skillList', () => {
    const formatted = component.formattedSkillGroups;
    expect(formatted[1].formattedSkills).toBe('No skills available');
  });

  it('should preserve original group properties in the formatted result', () => {
    const formatted = component.formattedSkillGroups;
    expect(formatted[0].skillCategory).toBe('Frontend');
    expect(formatted[0].icon).toBe('code');
    expect(formatted[0].skillList).toEqual(mockSkillGroups[0].skillList);
  });

  it('should return an empty array when skillGroups is undefined', () => {
    component.skillGroups = undefined as unknown as SkillCategory[];
    expect(component.formattedSkillGroups).toEqual([]);
  });

  it('should handle a group with a single skill', () => {
    component.skillGroups = [
      {
        skillCategory: 'Tools',
        icon: 'build',
        skillList: [{ skillName: 'Git' }],
      },
    ];
    const formatted = component.formattedSkillGroups;
    expect(formatted[0].formattedSkills).toBe('Git');
  });
});
