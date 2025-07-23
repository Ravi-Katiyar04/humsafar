'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('response:', response.data);
      const data = response.data;
      
      if (data.error) {
        setError(data.error);
      } else {
        toast.success('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/';
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-2xl rounded-xl my-8 p-10 w-[95%] max-w-md animate-fade-in">
        <div className="text-center mb-6">
          <i className="fas fa-train text-4xl text-blue-600 mb-2"></i>
          <h2 className="text-3xl font-bold text-gray-800">Welcome to Humsafar</h2>
          <p className="text-sm text-gray-500">Login to continue your journey</p>
        </div>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-600 cursor-pointer hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}


