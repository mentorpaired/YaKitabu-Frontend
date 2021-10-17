import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page link', () => {
  render(<App />);

  const accountElement = screen.getByText(/I have an account/i);
  const rememberElement = screen.getByText(/Remember Me/i);

  expect(accountElement).toBeInTheDocument();
  expect(rememberElement).toBeInTheDocument();
});
