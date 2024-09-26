import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      console.log('Recipe already added');
    } else {
      console.log('Recipe not  added');
      set((state) => ({ favorites: [...state.favorites, recipe] }));
    }
  },
});
