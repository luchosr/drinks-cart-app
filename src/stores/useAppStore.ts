import { create } from 'zustand';
import { createRecipesSlice, RecipesSliceType } from './recipeSlice';

// aqui se pasa ...a refiriendose a los argumentos set, get, api del store de zustand
export const useAppStore = create<RecipesSliceType>((...a) => ({
  ...createRecipesSlice(...a),
}));
