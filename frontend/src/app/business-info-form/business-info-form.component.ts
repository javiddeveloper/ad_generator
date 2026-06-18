import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './business-info-form.component.html',
  styleUrls: ['./business-info-form.component.css']
})
export class BusinessInfoFormComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]?[\d\s\-()]{7,20}$/)]]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
}
