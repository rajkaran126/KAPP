SKILL_WEIGHTS = {
    "python": 15,
    "sql": 12,
    "django": 10,
    "flask": 8,
    "machine learning": 20,
    "react": 10,
    "docker": 10,
    "aws": 12
}

def risk_agent(required, missing):
    total_weight = sum(SKILL_WEIGHTS.get(skill, 5) for skill in required)
    missing_weight = sum(SKILL_WEIGHTS.get(skill, 5) for skill in missing)

    score = int(((total_weight - missing_weight) / total_weight) * 100)
    return max(min(score, 95), 20)
