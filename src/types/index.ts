import {
  DrinksAPIResponse,
  searchFilterSchema,
} from './../utils/recipes-schema';
import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof searchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
