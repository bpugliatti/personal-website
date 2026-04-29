import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactItemComponent } from './contact-item.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from '../../core/models/contact.model';

describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;
  let snackBarSpy: jest.Mocked<Pick<MatSnackBar, 'open'>>;

  const mockContact: Contact = {
    contactType: 'Email',
    contactValue: 'test@example.com',
    contactIcon: 'email',
    contactTooltip: 'Click to copy email',
    isCopyAllowed: true,
  };

  beforeEach(async () => {
    snackBarSpy = { open: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [ContactItemComponent],
      providers: [{ provide: MatSnackBar, useValue: snackBarSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    component.contact = mockContact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the contact input bound correctly', () => {
    expect(component.contact).toEqual(mockContact);
  });

  it('should open snackbar with "Copied to clipboard!" message', () => {
    component.showCopiedMessage();
    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Copied to clipboard!',
      'Close',
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      },
    );
  });

  it('should call snackbar open exactly once per call', () => {
    component.showCopiedMessage();
    component.showCopiedMessage();
    expect(snackBarSpy.open).toHaveBeenCalledTimes(2);
  });
});
