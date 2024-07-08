import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  const location = useLocation();
  const token = localStorage.getItem('genericToken');
  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
    setLoading(false)
  }, [token]);
if(loading){
return <div>Loading...</div>
}
  if (!user) {
    console.log('Redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log('Redirecting to children');
  return children;
};

export default Auth;
