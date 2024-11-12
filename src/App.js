import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Contacts from './components/Contacts';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Add the NavBar component */}
        <NavBar token={token} setToken={setToken} />

        <div className="pt-8">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/contacts" element={<Contacts token={token} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
