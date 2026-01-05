import React, { useState } from 'react';
import { User, Lock, LogIn, LogOut } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface UserCredentials {
  username: string;
  password: string;
}

const mockUser: UserCredentials = {
  username: 'comicfan',
  password: 'supersecret',
};

const Authentication: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<UserCredentials>({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    if (credentials.username === mockUser.username && credentials.password === mockUser.password) {
      setIsAuthenticated(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
    alert('Logged out successfully.');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-zinc-800 to-slate-900 shadow-lg rounded-lg">
      {!isAuthenticated ? (
        <div>
          <h2 className="text-xl text-white mb-4 flex items-center">
            <User className="mr-2" /> User Authentication
          </h2>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="mb-2 p-2 w-full bg-zinc-700 text-white rounded"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="mb-4 p-2 w-full bg-zinc-700 text-white rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full p-2 bg-green-500 hover:bg-green-600 text-white rounded flex items-center justify-center"
          >
            <LogIn className="mr-2" /> Login
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl text-white mb-4 flex items-center">
            <Lock className="mr-2" /> Welcome, {mockUser.username}!
          </h2>
          <button
            onClick={handleLogout}
            className="w-full p-2 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center"
          >
            <LogOut className="mr-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;