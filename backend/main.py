from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from roles import ROLES
from utils import extract_text, extract_skills, calculate_missing
from orchestrator import run_orchestrator
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/roles/")
def get_roles():
    return list(ROLES.keys())

@app.post("/analyze/")
async def analyze(file: UploadFile = File(...), role: str = Form(...)):

    if role not in ROLES:
        return {"error": "Invalid role selected"}

    text = extract_text(file)
    user_skills = extract_skills(text)
    required = ROLES.get(role, [])
    missing = calculate_missing(required, user_skills)

    ai_result = run_orchestrator(role, user_skills, required, missing)

    logging.info(f"Role: {role}, Score: {ai_result['risk_score']}")

    return {
        "detected_skills": user_skills,
        "missing_skills": missing,
        "ai": ai_result
    }
