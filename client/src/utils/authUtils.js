
export function login(email, password) {
  // Send login request to the server
  // Make a POST request to the server's login endpoint with user credentials
return fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then(response => {
    if (!response.ok) {
      // If the response is not ok, throw an error
      throw new Error('Login failed');
    }
    // If the response is ok, return the response data
    return response.json();
  })
  .then(data => {
    // Save authentication token received from the server
    saveAuthToken(data.token);
    // Optionally, you can also perform additional actions here upon successful login
    // For example, redirect the user to another page
  })
  .catch(error => {
    // Handle any errors that occur during the login process
    console.error('Login failed:', error.message);
    throw error; // Optionally, you can re-throw the error to handle it elsewhere
  });
}

export function logout() {
  // Clear user session and log out
  clearAuthToken();
}

export function saveAuthToken(token) {
  // Save authentication token in local storage or cookies
  localStorage.setItem('authToken', token);
}

export function getAuthToken() {
  // Retrieve authentication token from local storage or cookies
  return localStorage.getItem('authToken');
}

export function clearAuthToken() {
  // Clear authentication token from local storage or cookies
  localStorage.removeItem('authToken');
}

export function isAuthenticated() {
  // Check if the user is authenticated based on the presence of a valid token
  
const authToken = localStorage.getItem('authToken');
return authToken !== null; // Return true if authToken is present, indicating authentication

}
