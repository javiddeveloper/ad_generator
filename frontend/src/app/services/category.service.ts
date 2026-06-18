import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { BUSINESS_CATEGORIES } from '../data/categories.data';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly categories: Category[] = BUSINESS_CATEGORIES;

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(id: string): Observable<Category | undefined> {
    return of(this.categories.find(c => c.id === id));
  }

  searchCategories(query: string): Observable<Category[]> {
    const q = query.trim().toLowerCase();
    if (!q) return of(this.categories);
    return of(
      this.categories.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          (c.description ?? '').toLowerCase().includes(q)
      )
    );
  }
}
