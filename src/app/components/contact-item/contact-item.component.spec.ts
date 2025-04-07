import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ContactItemComponent } from './contact-item.component';

describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;
  let snackBarMock: { open: jest.Mock };

  beforeEach(() => {
    snackBarMock = {
      open: jest.fn(() => of({})),
    };

    TestBed.configureTestingModule({
      imports: [ContactItemComponent],
      providers: [{ provide: MatSnackBar, useValue: snackBarMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    component.contact = {
      isCopyAllowed: true,
      contactValue: 'test@example.com',
      contactType: 'email',
      contactIcon: 'email',
      contactTooltip: 'Email',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the copy contact button when configured', () => {
    component.contact.isCopyAllowed = true;
    fixture.detectChanges();
    const copyButton = fixture.nativeElement.querySelector('button');
    expect(copyButton).toBeTruthy();
  });

  it('should NOT display the copy contact button when not configured', () => {
    component.contact.isCopyAllowed = false;
    fixture.detectChanges();
    const copyButton = fixture.nativeElement.querySelector('button');
    expect(copyButton).toBeFalsy();
  });

  it('should display snackbar when the copy button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(snackBarMock.open).toHaveBeenCalledWith(
      'Copied to clipboard!',
      'Close',
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      },
    );
  });
});
