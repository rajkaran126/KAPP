import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">🚀</span>
                    <span className="logo-text">KAPP</span>
                </Link>

                <div className="nav-links">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/analyze" className={`nav-link ${isActive('/analyze')}`}>Analyze</Link>
                    <Link to="/features" className={`nav-link ${isActive('/features')}`}>Features</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                </div>

                <Link to="/analyze" className="nav-cta">
                    Start Now
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
