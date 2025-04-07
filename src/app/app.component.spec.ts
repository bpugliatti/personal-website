import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
