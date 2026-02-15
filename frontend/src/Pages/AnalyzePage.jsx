import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import AnalysisResults from '../components/AnalysisResults';
import { motion, AnimatePresence } from 'framer-motion';

const AnalyzePage = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState('landing'); // 'landing' or 'results'

    const handleAnalysisComplete = (data) => {
        setAnalysisData(data);
        setView('results');
        setLoading(false);
        // Scroll to top when results appear
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setAnalysisData(null);
        setView('landing');
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', width: '100%' }}>
            <AnimatePresence mode="wait">
                {view === 'landing' ? (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <LandingPage
                            onAnalysisComplete={handleAnalysisComplete}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%' }}
                    >
                        <AnalysisResults
                            data={analysisData}
                            onReset={handleReset}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnalyzePage;
