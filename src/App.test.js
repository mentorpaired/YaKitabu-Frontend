import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landingpage', () => {
  render(<App />);

  const textElement = screen.getByText(/Already have an account?/i);

  expect(textElement).toBeInTheDocument();
});
