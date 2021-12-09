import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import Loginpage from './components/Loginpage';

test('renders landingpage', () => {
  render(<App />);

  const textElement = screen.getByText("Already have an account?");
  expect(textElement).toBeInTheDocument();
});

test('renders login page', () => {
  render(<Loginpage />);

  const rememberElement = screen.getByText("Remember Me");
  expect(rememberElement).toBeInTheDocument();
});

