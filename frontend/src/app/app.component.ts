import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategorySelectorComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Ad Generator</h1>
        <p>تبلیغات هوشمند برای کسب‌وکار شما</p>
      </header>
      <main>
        <app-category-selector (categorySelected)="onCategorySelected($event)"></app-category-selector>
        <div class="result-banner" *ngIf="selected">
          ✓ دسته‌بندی انتخاب‌شده: <strong>{{ selected.icon }} {{ selected.name }}</strong>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    .app-header {
      text-align: center;
      margin-bottom: 2.5rem;
      h1 { font-size: 2rem; font-weight: 700; color: #4f46e5; }
      p { margin-top: 0.5rem; color: #64748b; }
    }
    .result-banner {
      margin-top: 1.5rem;
      padding: 1rem 1.5rem;
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 10px;
      color: #166534;
      font-size: 1rem;
      text-align: center;
      strong { font-weight: 700; }
    }
  `]
})
export class AppComponent {
  selected: Category | null = null;

  onCategorySelected(category: Category): void {
    this.selected = category;
  }
}
