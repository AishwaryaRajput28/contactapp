// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Contact Manager
        </Link>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="text-white px-4 py-2 hover:bg-indigo-500 rounded-md">
                Login
              </Link>
              <Link to="/register" className="text-white px-4 py-2 hover:bg-indigo-500 rounded-md">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 hover:bg-red-500 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
