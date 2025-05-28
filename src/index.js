// index.js or main.jsx (entry point for React app)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components
import App from './pages/default/App';
import LandingPage from './pages/LandingPage';
import ATNI from './pages/Outreach/ATNI/ATNI';
import Books from './pages/Business/Books/Books';
import Food from './pages/Business/Food/Kelewele';
import Outreach from './pages/Outreach/Outreach';

import './index.css'; // Optional global styles

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Outreach" element={<Outreach />} />
        <Route path="/Outreach/ATNI" element={<ATNI />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
