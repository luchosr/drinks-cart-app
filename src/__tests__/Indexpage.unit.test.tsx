import { render, screen } from '@testing-library/react';
import Indexpage from '../views/Indexpage';

describe('Indexpage', () => {
  beforeEach(() => {
    render(<Indexpage />);
  });

  test('renders content', () => {
    const element = screen.getByText('Recetas');
    expect(element).toBeDefined();
  });

  test('shows fallback content when there are no favorites', () => {
    const element = screen.getByText(
      'No hay resultados por el momento, utiliza el formulario par buscar recetas'
    );
    expect(element).toBeDefined();
  });
});
