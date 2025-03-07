import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ColoringPage from './pages/ColoringPage';
import ZaptBadge from './components/ZaptBadge';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Router>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/coloring/:id" element={<ColoringPage />} />
                    </Routes>
                </div>
                <ZaptBadge />
            </Router>
        </div>
    );
}