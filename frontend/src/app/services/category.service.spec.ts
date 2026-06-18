import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { BUSINESS_CATEGORIES } from '../data/categories.data';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all categories', (done) => {
    service.getCategories().subscribe(cats => {
      expect(cats.length).toBe(BUSINESS_CATEGORIES.length);
      done();
    });
  });

  it('should find a category by valid id', (done) => {
    service.getCategoryById('bakery').subscribe(cat => {
      expect(cat).toBeDefined();
      expect(cat?.name).toBe('نانوایی');
      done();
    });
  });

  it('should return undefined for an unknown id', (done) => {
    service.getCategoryById('__nonexistent__').subscribe(cat => {
      expect(cat).toBeUndefined();
      done();
    });
  });

  it('should filter categories matching a search query', (done) => {
    service.searchCategories('کافه').subscribe(cats => {
      expect(cats.length).toBeGreaterThan(0);
      expect(cats.some(c => c.id === 'cafe')).toBeTrue();
      done();
    });
  });

  it('should return empty array when no category matches', (done) => {
    service.searchCategories('xyzxyzxyz_nomatch').subscribe(cats => {
      expect(cats.length).toBe(0);
      done();
    });
  });

  it('should return all categories for an empty search query', (done) => {
    service.searchCategories('').subscribe(cats => {
      expect(cats.length).toBe(BUSINESS_CATEGORIES.length);
      done();
    });
  });
});
