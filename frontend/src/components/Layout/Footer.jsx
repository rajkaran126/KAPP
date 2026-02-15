import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>🚀 KAPP</h3>
                    <p>AI-Powered Career Intelligence for the next generation of tech professionals.</p>
                </div>

                <div className="footer-section">
                    <h4>Navigate</h4>
                    <a href="/">Home</a>
                    <a href="/analyze">Analyze</a>
                    <a href="/features">Features</a>
                    <a href="/about">About</a>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <a href="https://github.com/rajkaran126/KAPP" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} KAPP. Built with 🔥 & 🤖 by Prajwal S Hangaragi.</p>
            </div>
        </footer>
    );
};

export default Footer;
