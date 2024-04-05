import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders login form', () => {
  render(<LoginForm />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('submits form with valid credentials', () => {
  const mockLogin = jest.fn();
  render(<LoginForm onSubmit={mockLogin} />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);

  expect(mockLogin).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
