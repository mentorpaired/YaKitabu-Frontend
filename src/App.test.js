import { render, screen } from '@testing-library/react';
import App from './App';

test('renders signup page link', () => {
  render(<App />);

  const signupElement = screen.getByText(/signUp/i);
  const accountElement = screen.getByText(/I have an account/i);

  expect(signupElement).toBeInTheDocument();
  expect(accountElement).toBeInTheDocument();
});
