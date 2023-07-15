import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

// Used to wrap the Application with the user id and requests
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    // Check if a user is logged in
    JSON.parse(localStorage.getItem('user')) || null
  );

  // State for registration completion
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Logged in context
  const login = async (inputs) => {
    const res = await axios.post('/auth/login', inputs);
    setCurrentUser(res.data);
  };

  const registered = async (inputs) => {
    const res = await axios.post('/auth/register', inputs);
    login(inputs);
    setRegistrationComplete(true);
    setCurrentUser(res.data);
  };

  // Logged out context
  const logout = async () => {
    try {
      setCurrentUser(null);
      localStorage.clear(); // Clear the local storage
      await axios.get('/auth/logout');

      // Clear the JWT token from the cookie
      document.cookie =
        'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Optionally, you can redirect to the home page after successful logout
      // window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, registered, registrationComplete, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
