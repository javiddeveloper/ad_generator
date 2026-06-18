import { Component } from '@angular/core';
import { BusinessInfoFormComponent } from './business-info-form/business-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BusinessInfoFormComponent],
  template: `<app-business-info-form></app-business-info-form>`
})
export class AppComponent {
  title = 'ad-generator';
}
