import pdfplumber
from skills import SKILLS_LIST


# --- Skill synonym mapping (makes detection smarter) ---
SYNONYMS = {
    "postgresql": "sql",
    "mysql": "sql",
    "sqlite": "sql",
    "rest api": "api development",
    "restful api": "api development",
    "apis": "api development",
    "backend": "api development",
    "nodejs": "api development",
    "deep learning": "machine learning"
}


def extract_text(file):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text.lower()


def extract_skills(text):

    detected = set()

    # Direct keyword match
    for skill in SKILLS_LIST:
        if skill.lower() in text:
            detected.add(skill)

    # Synonym detection
    for synonym, mapped_skill in SYNONYMS.items():
        if synonym in text:
            detected.add(mapped_skill)

    return list(detected)


def calculate_missing(required, user):
    return [skill for skill in required if skill not in user]
