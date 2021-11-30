import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landingpage', () => {
  render(<App />);

  const textElement = screen.getByText("Already have an account?");
  expect(textElement).toBeInTheDocument();
});

test('renders login page', () => {
  render(<App />);

  const rememberElement = screen.getByText("Remember Me");
  
  expect(rememberElement).toBeInTheDocument();
});
