import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I am going to be a cloned Netflix application/i);
  expect(linkElement).toBeInTheDocument();
});
