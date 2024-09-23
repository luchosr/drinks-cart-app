import { searchFilterSchema } from './../utils/recipes-schema';
import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type searchFilter = z.infer<typeof searchFilterSchema>;
