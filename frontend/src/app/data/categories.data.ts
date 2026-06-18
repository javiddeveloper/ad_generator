import { Category } from '../models/category.model';

export const BUSINESS_CATEGORIES: Category[] = [
  { id: 'bakery',      name: 'نانوایی',         icon: '🥖', description: 'نان، شیرینی و کیک' },
  { id: 'pharmacy',   name: 'داروخانه',         icon: '💊', description: 'دارو و محصولات بهداشتی' },
  { id: 'clothing',   name: 'پوشاک',            icon: '👗', description: 'فروش لباس و پوشاک' },
  { id: 'restaurant', name: 'رستوران',          icon: '🍽️', description: 'رستوران و فست‌فود' },
  { id: 'supermarket',name: 'سوپرمارکت',        icon: '🛒', description: 'فروشگاه مواد غذایی' },
  { id: 'electronics',name: 'الکترونیک',        icon: '📱', description: 'لوازم الکترونیکی' },
  { id: 'bookstore',  name: 'کتابفروشی',        icon: '📚', description: 'کتاب و لوازم تحریر' },
  { id: 'salon',      name: 'آرایشگاه',         icon: '💇', description: 'آرایشگاه و زیبایی' },
  { id: 'gym',        name: 'باشگاه ورزشی',     icon: '🏋️', description: 'باشگاه و مرکز ورزشی' },
  { id: 'cafe',       name: 'کافه',             icon: '☕', description: 'کافه و قهوه‌خانه' },
  { id: 'jewelry',    name: 'جواهری',           icon: '💍', description: 'طلا و جواهر' },
  { id: 'hardware',   name: 'ابزارآلات',        icon: '🔧', description: 'فروشگاه ابزار' },
  { id: 'florist',    name: 'گل‌فروشی',         icon: '🌸', description: 'گل و گیاه' },
  { id: 'optician',   name: 'عینک‌فروشی',       icon: '👓', description: 'عینک و لنز' },
  { id: 'carwash',    name: 'کارواش',           icon: '🚗', description: 'شستشو و خدمات خودرو' },
  { id: 'pet',        name: 'پت‌شاپ',           icon: '🐾', description: 'لوازم و خدمات حیوانات' },
];
