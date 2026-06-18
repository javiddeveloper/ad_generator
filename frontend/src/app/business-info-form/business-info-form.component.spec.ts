import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessInfoFormComponent } from './business-info-form.component';

describe('BusinessInfoFormComponent', () => {
  let component: BusinessInfoFormComponent;
  let fixture: ComponentFixture<BusinessInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessInfoFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an invalid form when all fields are empty', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should require businessName field', () => {
    const ctrl = component.form.get('businessName');
    ctrl?.setValue('');
    expect(ctrl?.hasError('required')).toBeTrue();
  });

  it('should require address field', () => {
    const ctrl = component.form.get('address');
    ctrl?.setValue('');
    expect(ctrl?.hasError('required')).toBeTrue();
  });

  it('should require phone field', () => {
    const ctrl = component.form.get('phone');
    ctrl?.setValue('');
    expect(ctrl?.hasError('required')).toBeTrue();
  });

  it('should reject an invalid phone format', () => {
    const ctrl = component.form.get('phone');
    ctrl?.setValue('abc-xyz');
    expect(ctrl?.hasError('pattern')).toBeTrue();
  });

  it('should accept a valid phone number', () => {
    const ctrl = component.form.get('phone');
    ctrl?.setValue('+12345678901');
    expect(ctrl?.valid).toBeTrue();
  });

  it('should have a valid form when all fields are correctly filled', () => {
    component.form.setValue({
      businessName: 'My Business',
      address: '123 Main Street, City',
      phone: '+12345678901'
    });
    expect(component.form.valid).toBeTrue();
  });

  it('should set submitted flag to true on form submit', () => {
    expect(component.submitted).toBeFalse();
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  });

  it('should return true from isFieldInvalid for empty required field after submit', () => {
    component.onSubmit();
    expect(component.isFieldInvalid('businessName')).toBeTrue();
  });

  it('should return false from isFieldInvalid when field is valid and touched', () => {
    const ctrl = component.form.get('businessName');
    ctrl?.setValue('My Business');
    ctrl?.markAsTouched();
    expect(component.isFieldInvalid('businessName')).toBeFalse();
  });
});
