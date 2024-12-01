import React from 'react';
import { Search, Globe, Menu, User, SlidersHorizontal } from 'lucide-react';
import { Logo } from './Logo';
import { useStore } from '../../store/useStore';
import { Link } from 'react-router-dom';

export function Header() {
  const { setSearchModalOpen, setLoginModalOpen, setFilterModalOpen } = useStore();

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          <button
            className="flex items-center px-4 py-2 rounded-full border hover:shadow-md transition duration-200"
            onClick={() => setSearchModalOpen(true)}
          >
            <span className="font-medium px-4 border-r">Anywhere</span>
            <span className="font-medium px-4 border-r">Any week</span>
            <span className="text-gray-600 px-4">Add guests</span>
            <div className="bg-primary p-2 rounded-full text-white">
              <Search size={16} />
            </div>
          </button>

          <div className="flex items-center gap-4">
            <button
              className="font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition"
              onClick={() => setLoginModalOpen(true)}
            >
              Airbnb your home
            </button>
            <button className="hover:bg-gray-100 p-2 rounded-full transition">
              <Globe size={20} />
            </button>
            <button
              className="hover:bg-gray-100 p-2 rounded-full transition"
              onClick={() => setFilterModalOpen(true)}
            >
              <SlidersHorizontal size={20} />
            </button>
            <button
              className="flex items-center gap-2 border rounded-full p-2 hover:shadow-md transition"
              onClick={() => setLoginModalOpen(true)}
            >
              <Menu size={20} />
              <div className="bg-gray-500 p-1 rounded-full text-white">
                <User size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}