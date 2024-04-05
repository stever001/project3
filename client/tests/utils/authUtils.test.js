// Import the validateEmail and validatePassword functions from the authUtils module
import { validateEmail, validatePassword } from '../src/utils/authUtils';

// Test case to validate the validateEmail function with a valid email address
test('validateEmail returns true for valid email', () => {
  const validEmail = 'test@example.com'; 
  // Define a valid email address
  expect(validateEmail(validEmail)).toBe(true); 
  // Assert that the validateEmail function returns true for the valid email address
});

// Test case to validate the validateEmail function with an invalid email address
test('validateEmail returns false for invalid email', () => {
  const invalidEmail = 'invalidemail'; 
  // Define an invalid email address
  expect(validateEmail(invalidEmail)).toBe(false); 
  // Assert that the validateEmail function returns false for the invalid email address
});

// Test case to validate the validatePassword function with a valid password
test('validatePassword returns true for valid password', () => {
  const validPassword = 'password123'; 
  // Define a valid password
  expect(validatePassword(validPassword)).toBe(true); 
  // Assert that the validatePassword function returns true for the valid password
});

// Test case to validate the validatePassword function with an invalid password
test('validatePassword returns false for invalid password', () => {
  const invalidPassword = 'password'; 
  // Define an invalid password
  expect(validatePassword(invalidPassword)).toBe(false); 
  // Assert that the validatePassword function returns false for the invalid password
});
