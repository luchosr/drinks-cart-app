import { render, screen } from '@testing-library/react';
import Indexpage from '../views/Indexpage';

test('renders without error', () => {
  render(<Indexpage />);
});

test('renders content', () => {
  render(<Indexpage />);

  const element = screen.getByText('Recetas');
  expect(element).toBeDefined();
});
