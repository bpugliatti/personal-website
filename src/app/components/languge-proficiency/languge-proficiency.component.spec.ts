import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangugeProficiencyComponent } from './languge-proficiency.component';

describe('LangugeProficiencyComponent', () => {
  let component: LangugeProficiencyComponent;
  let fixture: ComponentFixture<LangugeProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangugeProficiencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangugeProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
