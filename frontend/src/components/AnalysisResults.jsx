import './AnalysisResults.css';
import { BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CountUp from 'react-countup';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion';

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

    // PDF Export Handler
    const handleExportPDF = async () => {
        const element = document.getElementById('results-content');
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('KAPP_Career_Analysis.pdf');
    };

    // Prepare chart data
    const domainChartData = Object.entries(analysis.domain_strength_breakdown)
        .sort(([, a], [, b]) => b - a)
        .map(([domain, score]) => ({ name: domain, value: score }));

    const roleChartData = Object.entries(analysis.role_match_breakdown)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([role, score]) => ({ name: role, value: score }));

    const colors = ['#00FFD1', '#00D4FF', '#8B5CF6', '#FFD700', '#FF006E'];

    return (
        <div className="results-page">
            <div className="container" id="results-content">
                {/* Header */}
                <header className="results-header fade-in">
                    <h1>YOUR CAREER ANALYSIS</h1>
                    <p className="subtitle">The analysis is complete. Your optimal career path has been identified.</p>
                    <div className="header-buttons">
                        <button className="btn btn-export" onClick={handleExportPDF}>📄 Export to PDF</button>
                        <button className="btn" onClick={onReset}>Analyze Another Resume</button>
                    </div>
                </header>

                {/* Main Stats */}
                <div className="stats-grid fade-in">
                    <div className="stat-card primary">
                        <div className="stat-value">
                            <CountUp end={analysis.general_strength_score} duration={2} suffix="%" />
                        </div>
                        <div className="stat-label">General Strength Score</div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${analysis.general_strength_score}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">
                            <CountUp end={analysis.market_alignment_score} duration={2} suffix="%" />
                        </div>
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
                    <motion.div
                        className="card fade-in chart-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>🏆 DOMAIN STRENGTH BREAKDOWN</h3>
                        <div className="divider"></div>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={domainChartData}>
                                <PolarGrid stroke="#00FFD1" strokeOpacity={0.3} />
                                <PolarAngleAxis
                                    dataKey="name"
                                    stroke="#00FFD1"
                                    style={{ fontSize: '12px', fontFamily: 'Orbitron' }}
                                />
                                <PolarRadiusAxis stroke="#00FFD1" strokeOpacity={0.3} />
                                <Radar
                                    dataKey="value"
                                    stroke="#00FFD1"
                                    fill="#00FFD1"
                                    fillOpacity={0.6}
                                    animationDuration={1500}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        border: '1px solid #00FFD1',
                                        borderRadius: '12px',
                                        color: '#00FFD1',
                                        fontFamily: 'Orbitron'
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    <motion.div
                        className="card fade-in chart-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>💼 ROLE MATCH BREAKDOWN</h3>
                        <div className="divider"></div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={roleChartData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#00FFD1" strokeOpacity={0.2} />
                                <XAxis type="number" stroke="#00FFD1" />
                                <YAxis
                                    type="category"
                                    dataKey="name"
                                    stroke="#00FFD1"
                                    width={120}
                                    style={{ fontSize: '11px', fontFamily: 'Orbitron' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        border: '1px solid #00FFD1',
                                        borderRadius: '12px',
                                        color: '#00FFD1',
                                        fontFamily: 'Orbitron'
                                    }}
                                />
                                <Bar dataKey="value" animationDuration={1500} radius={[0, 8, 8, 0]}>
                                    {roleChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
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
