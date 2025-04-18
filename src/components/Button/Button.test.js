import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renderiza el botón correctamente', () => {
  render(<Button label="Haz clic" />);
  const buttonElement = screen.getByText(/Haz clic/i);
  expect(buttonElement).toBeInTheDocument();
});