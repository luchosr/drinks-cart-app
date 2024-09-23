import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, RecipesSliceType } from './recipeSlice';

// aqui se pasa ...a refiriendose a los argumentos set, get, api del store de zustand
export const useAppStore = create<RecipesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);
