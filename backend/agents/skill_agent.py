from agents.risk_agent import SKILL_WEIGHTS

def skill_importance(missing):
    return sorted(
        missing,
        key=lambda x: SKILL_WEIGHTS.get(x, 5),
        reverse=True
    )

def profile_strength(score):
    if score > 80:
        return "Highly Ready"
    elif score > 60:
        return "Moderately Ready"
    elif score > 40:
        return "Needs Improvement"
    else:
        return "High Risk"

def analysis_agent(role, missing):
    if not missing:
        return f"You are strongly aligned with the {role} role."
    return f"{len(missing)} significant skill gaps detected for {role}. Prioritize high-weighted skills."
