import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthService } from '../utils/authService';
import { checkToken } from '../store/thunks/authThunks';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.client.user);

  useEffect(() => {
    // Check for existing authentication on app start
    dispatch(checkToken());
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