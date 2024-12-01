import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { PropertyPage } from './pages/PropertyPage';
import { SearchModal } from './components/modals/SearchModal';
import { LoginModal } from './components/modals/LoginModal';
import { FilterModal } from './components/modals/FilterModal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
          </Routes>
        </main>
        <SearchModal />
        <LoginModal />
        <FilterModal />
      </div>
    </Router>
  );
}

export default App;