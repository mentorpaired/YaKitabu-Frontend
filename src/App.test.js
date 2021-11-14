import { render, screen } from '@testing-library/react';
import App from './App';

test('renders signup page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SignUp/i);
  const linkElement = screen.getByText(/I have an account/i);
  expect(linkElement).toBeInTheDocument();
});
