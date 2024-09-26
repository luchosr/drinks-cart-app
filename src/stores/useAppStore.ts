import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, RecipesSliceType } from './recipeSlice';
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice';
import {
  createNotificationSlice,
  NotificationSliceType,
} from './NotificationSlice';

// aqui se pasa ...a refiriendose a los argumentos set, get, api del store de zustand
export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
