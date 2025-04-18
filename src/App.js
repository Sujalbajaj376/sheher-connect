import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import CommunityFeed from './pages/CommunityFeed';
import TendersPage from './pages/TendersPage';
import ReportIssue from './pages/ReportIssue';

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/community" element={<CommunityFeed />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/report-issue" element={<ReportIssue />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 