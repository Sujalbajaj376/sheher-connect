import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import CommunityFeed from './pages/CommunityFeed';
import TendersPage from './pages/TendersPage';
import ReportIssue from './pages/ReportIssue';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFoundPage from "./pages/NotFoundPage"
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Protected Route component - only for issue reporting
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Auth Route component (for login/signup when already authenticated)
const AuthRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  // Set up axios default headers
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

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
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* Only protect the issue reporting route */}
            <Route
              path="/report-issue"
              element={
                <ProtectedRoute>
                  <ReportIssue />
                </ProtectedRoute>
              }
            />
            
            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute>
                  <Signup />
                </AuthRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 