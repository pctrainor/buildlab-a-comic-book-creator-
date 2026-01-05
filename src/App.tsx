import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Editor, About } from './pages';
import { Header, Footer } from './components';
import { User, BookOpen, Info } from 'lucide-react';

const App = () => {
  const mockUser = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3"
  };

  const comicBooks = [
    { title: "The Adventures of React", description: "A journey through the React ecosystem." },
    { title: "Tailwind Tales", description: "Styling made easy with Tailwind CSS." },
    { title: "Icons of the Future", description: "Using Lucide Icons for modern web apps." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-zinc-800 via-slate-900 to-black text-white">
      <Header user={mockUser} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home comicBooks={comicBooks} />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ user }: { user: { name: string; avatar: string } }) => (
  <header className="flex justify-between items-center py-4 px-6 bg-slate-800 shadow-lg">
    <div className="flex items-center space-x-3">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-10 h-10 rounded-full" />
      <span className="text-lg font-semibold">{user.name}</span>
    </div>
    <nav className="flex space-x-4">
      <a href="/" className="flex items-center space-x-1 hover:text-gray-300">
        <BookOpen className="w-5 h-5" />
        <span>Home</span>
      </a>
      <a href="/editor" className="flex items-center space-x-1 hover:text-gray-300">
        <User className="w-5 h-5" />
        <span>Editor</span>
      </a>
      <a href="/about" className="flex items-center space-x-1 hover:text-gray-300">
        <Info className="w-5 h-5" />
        <span>About</span>
      </a>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="py-4 px-6 bg-slate-800 text-center text-sm text-gray-400">
    &copy; 2023 Comic Book Creator. All rights reserved.
  </footer>
);

export default App;