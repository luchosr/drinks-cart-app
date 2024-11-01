import { render, screen } from '@testing-library/react';
import FavoritesPage from '../views/FavoritesPage';

describe('FavoritesPage', () => {
  beforeEach(() => {
    render(<FavoritesPage />);
  });

  test('renders main  content title', () => {
    const element = screen.getByText('Favoritos');
    expect(element).toBeDefined();
  });

  test('shows fallback content when there are no favorites', () => {
    const element = screen.getByText(
      'No hay favoritos por el momento, agrege el que mejor le parezca.'
    );
    expect(element).toBeDefined();
  });
});
