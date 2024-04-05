import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Import render, fireEvent, and screen utilities from '@testing-library/react' for testing React components
import LoginForm from './LoginForm'; // Import the component to be tested

// Test case to ensure that the login form renders correctly
test('renders login form', () => {
  render(<LoginForm />); 
  // Render the LoginForm component
  
  // Find form elements by their placeholder text or content using screen utility
  const emailInput = screen.getByPlaceholderText('Email'); 
  // Get the email input field by its placeholder text
  const passwordInput = screen.getByPlaceholderText('Password'); 
  // Get the password input field by its placeholder text
  const loginButton = screen.getByText('Login'); 
  // Get the login button by its text content

  // Assert that form elements are present in the rendered component
  expect(emailInput).toBeInTheDocument(); 
  // Check if the email input field is present in the document
  expect(passwordInput).toBeInTheDocument(); 
  // Check if the password input field is present in the document
  expect(loginButton).toBeInTheDocument(); 
  // Check if the login button is present in the document
});

// Test case to simulate submitting the login form with valid credentials
test('submits form with valid credentials', () => {
  const mockLogin = jest.fn(); 
  // Mock login function
  render(<LoginForm onSubmit={mockLogin} />); 
  // Render the LoginForm component with mockLogin function passed as a prop
  
  // Find form elements by their placeholder text using screen utility
  const emailInput = screen.getByPlaceholderText('Email'); 
  // Get the email input field by its placeholder text
  const passwordInput = screen.getByPlaceholderText('Password'); 
  // Get the password input field by its placeholder text
  const loginButton = screen.getByText('Login'); 
  // Get the login button by its text content

  // Simulate user input by changing input values
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } }); 
  // Simulate changing the email input field value
  fireEvent.change(passwordInput, { target: { value: 'password123' } }); 
  // Simulate changing the password input field value
  fireEvent.click(loginButton); 
  // Simulate form submission by clicking the login button

  // Assert that mockLogin function was called with the correct credentials
  expect(mockLogin).toHaveBeenCalledWith({ 
    // Check if the mockLogin function was called with the expected arguments
    email: 'test@example.com',
    password: 'password123',
  });
});
