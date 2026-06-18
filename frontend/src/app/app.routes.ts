import { Routes } from '@angular/router';
import { AdGeneratorComponent } from './features/ad-generator/ad-generator.component';

export const routes: Routes = [
  { path: '', component: AdGeneratorComponent, title: 'Ad Generator' },
  { path: '**', redirectTo: '' },
];
