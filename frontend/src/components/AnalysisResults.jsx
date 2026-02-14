import './AnalysisResults.css';

const AnalysisResults = ({ data, onReset }) => {
    const { analysis, detected_skills } = data;

    if (!analysis) {
        return <div className="container">No analysis data available</div>;
    }

    const getRiskColor = (risk) => {
        if (risk.includes('Low')) return 'success';
        if (risk.includes('Moderate')) return 'warning';
        return 'danger';
    };

    return (
        <div className="results-page">
            <div className="container">
                {/* Header */}
                <header className="results-header fade-in">
                    <h1>YOUR CAREER ANALYSIS</h1>
                    <p className="subtitle">The analysis is complete. Your optimal career path has been identified.</p>
                    <button className="btn" onClick={onReset}>Analyze Another Resume</button>
                </header>

                {/* Main Stats */}
                <div className="stats-grid fade-in">
                    <div className="stat-card primary">
                        <div className="stat-value">{analysis.general_strength_score}</div>
                        <div className="stat-label">General Strength Score</div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${analysis.general_strength_score}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">{analysis.market_alignment_score}</div>
                        <div className="stat-label">Market Alignment</div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${analysis.market_alignment_score}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">🎯</div>
                        <div className="stat-label">Recommended Role</div>
                        <div className="stat-text">{analysis.recommended_role}</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">🌍</div>
                        <div className="stat-label">Strongest Domain</div>
                        <div className="stat-text">{analysis.strongest_domain}</div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="card fade-in">
                    <h2>🔺 TOP DETECTED SKILLS</h2>
                    <div className="divider"></div>
                    <div className="skills-container">
                        {analysis.top_3_skills.map((skill, index) => (
                            <div key={index} className="skill-badge-large">
                                <span className="skill-rank">#{index + 1}</span>
                                <span className="skill-name">{skill}</span>
                                {analysis.skill_depth_breakdown[skill] && (
                                    <span className={`skill-depth depth-${analysis.skill_depth_breakdown[skill].toLowerCase()}`}>
                                        {analysis.skill_depth_breakdown[skill]}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-3">All Detected Skills</h3>
                    <div className="skills-grid">
                        {analysis.ranked_skills.map((skill, index) => (
                            <span key={index} className="badge">
                                {skill}
                                {analysis.skill_depth_breakdown[skill] && (
                                    <span className="skill-depth-mini"> • {analysis.skill_depth_breakdown[skill]}</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Career Analysis */}
                <div className="grid grid-2">
                    <div className="card fade-in">
                        <h3>📊 PROFILE ANALYSIS</h3>
                        <div className="divider"></div>
                        <div className="analysis-item">
                            <span className="analysis-label">Resume Complexity:</span>
                            <span className="analysis-value">{analysis.resume_complexity}</span>
                        </div>
                        <div className="analysis-item">
                            <span className="analysis-label">Extraction Confidence:</span>
                            <span className="analysis-value">{analysis.extraction_confidence}</span>
                        </div>
                        <div className="analysis-item">
                            <span className="analysis-label">Placement Probability:</span>
                            <span className="analysis-value highlight">{analysis.placement_probability_estimate}</span>
                        </div>
                    </div>

                    <div className="card fade-in">
                        <h3>⚠️ RISK ASSESSMENT</h3>
                        <div className="divider"></div>
                        <div className={`risk-badge badge-${getRiskColor(analysis.risk_index)}`}>
                            {analysis.risk_index}
                        </div>
                        <p className="mt-2">{analysis.competitive_summary}</p>
                    </div>
                </div>

                {/* Missing Skills */}
                {analysis.missing_skills_for_best_role && analysis.missing_skills_for_best_role.length > 0 && (
                    <div className="card fade-in warning-card">
                        <h3>🎯 SKILLS TO MASTER FOR {analysis.recommended_role}</h3>
                        <div className="divider"></div>
                        <p className="mb-2">To strengthen your profile for the {analysis.recommended_role} role, consider developing these skills:</p>
                        <div className="skills-grid">
                            {analysis.missing_skills_for_best_role.map((skill, index) => (
                                <span key={index} className="badge badge-warning">{skill}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Insights */}
                <div className="grid grid-2">
                    <div className="card fade-in">
                        <h3>💡 CAREER ALIGNMENT</h3>
                        <div className="divider"></div>
                        <p>{analysis.career_alignment_analysis}</p>
                    </div>

                    <div className="card fade-in">
                        <h3>🔄 SKILL SYNERGY</h3>
                        <div className="divider"></div>
                        <p>{analysis.skill_synergy_analysis}</p>
                    </div>
                </div>

                {/* Roadmap */}
                <div className="card fade-in roadmap-card">
                    <h2>🗺️ YOUR 4-WEEK CAREER ROADMAP</h2>
                    <div className="divider"></div>
                    <div className="roadmap-grid">
                        {Object.entries(analysis.roadmap).map(([week, task], index) => (
                            <div key={week} className="roadmap-item">
                                <div className="roadmap-week">
                                    <div className="week-number">{index + 1}</div>
                                    <div className="week-label">WEEK</div>
                                </div>
                                <div className="roadmap-content">
                                    <p>{task}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Domain & Role Breakdown */}
                <div className="grid grid-2">
                    <div className="card fade-in">
                        <h3>🏆 DOMAIN STRENGTH BREAKDOWN</h3>
                        <div className="divider"></div>
                        {Object.entries(analysis.domain_strength_breakdown)
                            .sort(([, a], [, b]) => b - a)
                            .map(([domain, score]) => (
                                <div key={domain} className="breakdown-item">
                                    <div className="breakdown-label">{domain}</div>
                                    <div className="breakdown-bar">
                                        <div
                                            className="breakdown-fill"
                                            style={{ width: `${(score / Math.max(...Object.values(analysis.domain_strength_breakdown))) * 100}%` }}
                                        >
                                            <span className="breakdown-score">{score}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="card fade-in">
                        <h3>💼 ROLE MATCH BREAKDOWN</h3>
                        <div className="divider"></div>
                        {Object.entries(analysis.role_match_breakdown)
                            .sort(([, a], [, b]) => b - a)
                            .slice(0, 5)
                            .map(([role, score]) => (
                                <div key={role} className="breakdown-item">
                                    <div className="breakdown-label">{role}</div>
                                    <div className="breakdown-bar">
                                        <div
                                            className="breakdown-fill"
                                            style={{ width: `${(score / Math.max(...Object.values(analysis.role_match_breakdown))) * 100}%` }}
                                        >
                                            <span className="breakdown-score">{score}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="results-footer fade-in">
                    <div className="quote">
                        "Success is where preparation meets opportunity."
                    </div>
                    <button className="btn btn-primary mt-3" onClick={onReset}>
                        Analyze Another Resume
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default AnalysisResults;
