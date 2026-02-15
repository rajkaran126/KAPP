import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1 className="about-title">About <span className="highlight-text">KAPP</span></h1>

                <section className="about-section">
                    <h2>The Mission</h2>
                    <p>
                        KAPP was built to bridge the gap between job seekers and their dream careers.
                        In a market flooded with generic advice, we use specialized AI agents to provide
                        hyper-personalized, data-driven career roadmaps.
                    </p>
                </section>

                <section className="about-section">
                    <h2>How It Started</h2>
                    <p>
                        It began as a Hackathon project by Prajwal S Hangaragi. The goal? To create a resume analyzer
                        that didn't just say "Add more keywords" but actually understood *synergy* between skills
                        and could predict career trajectory like a senior mentor.
                    </p>
                </section>

                <section className="about-section team-section">
                    <h2>The Creator</h2>
                    <div className="team-card">
                        <div className="avatar">👨‍💻</div>
                        <h3>Prajwal S Hangaragi</h3>
                        <p className="role">Full Stack Developer & AI Engineer</p>
                        <p className="bio">Passionate about building AI tools that empower people.</p>
                        <div className="social-links">
                            <a href="https://github.com/rajkaran126" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
