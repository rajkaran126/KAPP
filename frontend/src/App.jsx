import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AnalysisResults from './components/AnalysisResults';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'results'
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleAnalysisComplete = (data) => {
    setAnalysisData(data);
    setCurrentView('results');
    setLoading(false);
  };

  const handleReset = () => {
    setCurrentView('landing');
    setAnalysisData(null);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <div className="desert-background">
            <iframe src="/background.html" title="Animated Background"></iframe>
          </div>
          <div className="App">
            {currentView === 'landing' ? (
              <LandingPage
                onAnalysisComplete={handleAnalysisComplete}
                loading={loading}
                setLoading={setLoading}
              />
            ) : (
              <AnalysisResults
                data={analysisData}
                onReset={handleReset}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
