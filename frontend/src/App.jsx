import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Layout
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import HomePage from './Pages/HomePage';
import AnalyzePage from './Pages/AnalyzePage';
import FeaturesPage from './Pages/FeaturesPage';
import AboutPage from './Pages/AboutPage';
import LoadingScreen from './components/LoadingScreen';

// ScrollToTop component to handle view position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  // Initial fake loader for the "App" boot up
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="app-container">
          {/* Animated Background - Global */}
          <div className="desert-background">
            <iframe src="/background.html" title="Animated Background"></iframe>
          </div>

          <Navbar />

          <ScrollToTop />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/analyze" element={<AnalyzePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
