import './FeaturesPage.css';

const FeaturesPage = () => {
    const agents = [
        {
            icon: "🧠",
            title: "Skill Agent",
            desc: "Parses your resume to identify over 100+ technical skills, categorized by domain (Frontend, Backend, AI, etc.) and analyzes your proficiency depth."
        },
        {
            icon: "🎯",
            title: "Role Agent",
            desc: "Matches your profile against 30+ industry-standard roles to find your perfect fit. It calculates a match confidence score for each."
        },
        {
            icon: "🗺️",
            title: "Roadmap Agent",
            desc: "The superstar. Generates a tailored 4-week learning plan to bridge the gap between your current skills and your dream role."
        },
        {
            icon: "🤝",
            title: "Synergy Agent",
            desc: "Analyzes how your skills work together. Do you have a rare combo like 'AI + React'? This agent highlights your unique value proposition."
        },
        {
            icon: "⚖️",
            title: "Risk Agent",
            desc: "Playing devil's advocate. It assesses your competitive risks (e.g., 'Lack of Cloud Experience') so you can address them before the interview."
        }
    ];

    return (
        <div className="features-page">
            <header className="features-header">
                <h1>Meet the <span className="highlight-text">KAPP Agents</span></h1>
                <p>A symphony of 5 specialized AI agents working in harmony to decode your career.</p>
            </header>

            <div className="agents-grid">
                {agents.map((agent, index) => (
                    <div key={index} className="agent-card">
                        <div className="agent-icon">{agent.icon}</div>
                        <h2>{agent.title}</h2>
                        <p>{agent.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesPage;
