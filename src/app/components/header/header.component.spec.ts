import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Header } from '../../core/models/header.model';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const mockHeader: Header = {
    backgroundImage: 'bg.jpg',
    photo: 'photo.jpg',
    lastName: 'Doe',
    firstName: 'John',
    jobTitle: 'Front-end Developer',
    aboutMe: '<p>About me</p>',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.infos = mockHeader;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the infos input bound correctly', () => {
    expect(component.infos).toEqual(mockHeader);
  });

  it('should reflect updated infos input', () => {
    const updatedHeader: Header = {
      ...mockHeader,
      firstName: 'Jane',
      lastName: 'Smith',
    };
    component.infos = updatedHeader;
    fixture.detectChanges();
    expect(component.infos.firstName).toBe('Jane');
    expect(component.infos.lastName).toBe('Smith');
  });
});
