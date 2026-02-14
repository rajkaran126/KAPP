from agents.risk_agent import risk_agent
from agents.skill_agent import skill_importance, profile_strength, analysis_agent
from agents.roadmap_agent import roadmap_agent

def run_orchestrator(role, user, required, missing):

    risk_score = risk_agent(required, missing)
    ranked_missing = skill_importance(missing)
    strength = profile_strength(risk_score)
    roadmap = roadmap_agent(role, ranked_missing)
    analysis = analysis_agent(role, missing)

    coverage = int((len(user) / len(required)) * 100) if required else 0

    return {
        "risk_score": risk_score,
        "profile_strength": strength,
        "skill_coverage": coverage,
        "priority_skills": ranked_missing,
        "analysis": analysis,
        "roadmap": roadmap
    }
