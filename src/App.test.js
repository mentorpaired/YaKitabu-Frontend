import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landingpage', () => {
  render(<App />);

  const textElement = screen.getByText(/Already have an account?/i);
  expect(textElement).toBeInTheDocument("Already have an account");
});

test('renders login page', () => {
  render(<App />);

  const rememberElement = screen.getByText(/Remember Me/i);
  
  expect(rememberElement).toBeInTheDocument("Remember Me");
});
