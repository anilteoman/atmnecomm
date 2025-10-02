import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthService } from '../utils/authService';
import { checkToken } from '../store/thunks/authThunks';
import { getCategories } from '../store/thunks/productThunks';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.client.user);

  useEffect(() => {
    // Initialize app data on start
    dispatch(checkToken()); // Check authentication
    dispatch(getCategories()); // Load categories
  }, [dispatch]);

  const authContextValue = {
    user,
    isAuthenticated: AuthService.isAuthenticated(),
    isLoading: false, // You can add loading state here if needed
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};