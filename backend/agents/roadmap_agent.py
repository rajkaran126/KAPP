def roadmap_agent(role, missing):

    top_skills = ", ".join(missing[:2]) if missing else "advanced topics"

    return {
        "week1": f"Master core fundamentals of {top_skills}",
        "week2": f"Build a real-world {role} project",
        "week3": "Optimize architecture, improve scalability",
        "week4": "Deploy project, refine resume, prepare interviews"
    }
