import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Unlock Your <span className="highlight-text">Career Potential</span>
                    </h1>
                    <p className="hero-subtitle">
                        AI-Powered Resume Analysis & Career Roadmap Generator for the Modern Tech World.
                    </p>
                    <div className="hero-cta-group">
                        <Link to="/analyze" className="cta-button primary">
                            Analyze My Resume
                        </Link>
                        <Link to="/features" className="cta-button secondary">
                            See How It Works
                        </Link>
                    </div>
                </motion.div>

                {/* Abstract Visuals could go here */}
            </section>

            <section className="features-preview">
                <div className="feature-card">
                    <div className="feature-icon">🤖</div>
                    <h3>Multi-Agent AI</h3>
                    <p>5 specialized agents analyze every aspect of your profile.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Deep Insights</h3>
                    <p>Get a detailed breakdown of your skills and market fit.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🗺️</div>
                    <h3>Career Roadmap</h3>
                    <p>A personalized 4-week plan to reach your dream role.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
