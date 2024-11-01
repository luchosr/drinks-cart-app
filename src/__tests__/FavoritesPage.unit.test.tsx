import { render, screen } from '@testing-library/react';
import FavoritesPage from '../views/FavoritesPage';

test('renders without error', () => {
  render(<FavoritesPage />);
});

test('renders content', () => {
  render(<FavoritesPage />);

  const element = screen.getByText('Favoritos');
  expect(element).toBeDefined();
});
