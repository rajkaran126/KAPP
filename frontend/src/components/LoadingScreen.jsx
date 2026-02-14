import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                const newProgress = oldProgress + Math.random() * 15;
                return Math.min(newProgress, 100);
            });
        }, 200);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">K A P P</div>
                <div className="loading-progress-container">
                    <div
                        className="loading-progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="loading-caption">AI CAREER MAP NAVIGATOR</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
