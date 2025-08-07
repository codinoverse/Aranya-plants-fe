import { createContext, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : { name: '', email: '' };
  });

  const login = (userData) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userInfo', JSON.stringify(userData))// Store user ID
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo({ name: '', email: '' , userId: '' });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };