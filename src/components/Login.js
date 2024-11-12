// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', formData);
            localStorage.setItem('token', response.data.token); // Store the token
            setToken(response.data.token); // Update the token in the app state
            navigate('/contacts'); // Redirect to tasks page
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john.doe@example.com"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-500 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
