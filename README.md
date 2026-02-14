# KAPP - AI Career Map Navigator 🚀

> **Intelligent Resume Analysis & Career Guidance Platform**  
> Powered by Multi-Agent AI Architecture with Gen-Z Aesthetic Design

[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=flat&logo=python)](https://www.python.org/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Frontend Features](#frontend-features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## 🎯 Overview

**KAPP** is an AI-powered career intelligence platform that analyzes resumes using a sophisticated multi-agent system to provide comprehensive career insights, skill assessments, and personalized roadmaps. Built for the modern job seeker with a stunning Gen-Z inspired UI featuring glassmorphism, neon colors, and interactive data visualizations.

### Why KAPP?

- 🤖 **Multi-Agent AI System**: Specialized agents for skills, roles, roadmaps, synergy, and risk assessment
- 📊 **Deep Analysis**: Skill depth detection, domain strength mapping, and role matching
- 🎨 **Modern UI/UX**: Cyberpunk-inspired design with interactive charts and smooth animations
- 📄 **PDF Export**: Download your complete analysis as a professional PDF
- 🚀 **Real-time Processing**: Fast, efficient resume parsing and analysis

---

## ✨ Features

### Backend Intelligence

- **🧠 Multi-Agent Architecture**
  - `SkillAgent`: Extracts and categorizes skills with depth analysis
  - `RoleAgent`: Matches profile to 30+ tech roles with confidence scoring
  - `RoadmapAgent`: Generates personalized 4-week career development plans
  - `SynergyAgent`: Analyzes skill combinations and career alignment
  - `RiskAgent`: Assesses competitive positioning and market fit

- **📈 Advanced Analytics**
  - General strength scoring (0-100)
  - Market alignment calculation
  - Domain strength breakdown (Frontend, Backend, DevOps, AI, etc.)
  - Role match percentages with top 5 recommendations
  - Missing skills identification for target roles

- **🎯 Smart Resume Parsing**
  - PDF text extraction with PyPDF2
  - Intelligent skill detection across 100+ technologies
  - Experience level inference (Basic, Intermediate, Advanced)
  - Complexity assessment

### Frontend Experience

- **💫 Interactive Visualizations**
  - 📊 Animated Recharts (Radar Chart for domains, Bar Chart for roles)
  - 🔢 CountUp number animations for statistics
  - 🎭 Framer Motion card transitions
  - 🌈 Neon-colored, responsive charts

- **🎨 Gen-Z Aesthetic Design**
  - Glassmorphism effects with backdrop blur
  - Neon color palette (Teal, Electric Blue, Hot Pink, Cyber Purple)
  - Animated particle background with floating orbs and grid lines
  - Smooth micro-interactions and hover effects

- **⚡ User Experience**
  - Drag-and-drop resume upload
  - Loading screen with progress animation
  - PDF export functionality
  - Mobile-responsive design

---

## 🛠️ Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | 0.104.1 | High-performance REST API framework |
| **Python** | 3.13 | Core backend language |
| **PyPDF2** | 3.0.1 | PDF text extraction |
| **Uvicorn** | 0.24.0 | ASGI server |
| **Pydantic** | 2.5.0 | Data validation |

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI framework |
| **Vite** | 5.0.0 | Build tool & dev server |
| **Recharts** | 2.10.0 | Interactive data visualization |
| **Framer Motion** | 10.16.0 | Animation library |
| **React CountUp** | 6.5.0 | Number animations |
| **jsPDF** | 2.5.1 | PDF generation |
| **html2canvas** | 1.4.1 | HTML to canvas conversion |

---

## 🏗️ Architecture

### Multi-Agent System

```
┌─────────────────────────────────────────────────────────────┐
│                        ORCHESTRATOR                         │
│                  (Coordinates All Agents)                   │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐    ┌───────────────┐
│  Skill Agent  │     │  Role Agent   │    │ Roadmap Agent │
│               │     │               │    │               │
│ • Extraction  │     │ • Matching    │    │ • 4-Week Plan │
│ • Depth Level │     │ • Scoring     │    │ • Priorities  │
│ • Ranking     │     │ • Top Roles   │    │ • Resources   │
└───────────────┘     └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
        ┌───────────────┐           ┌───────────────┐
        │ Synergy Agent │           │  Risk Agent   │
        │               │           │               │
        │ • Alignment   │           │ • Assessment  │
        │ • Coherence   │           │ • Competition │
        └───────────────┘           └───────────────┘
```

### Data Flow

```
Upload Resume (PDF)
        │
        ▼
Extract Text (PyPDF2)
        │
        ▼
Skill Agent → Detect Skills & Depth
        │
        ▼
Role Agent → Match to Roles
        │
        ▼
Orchestrator → Calculate Scores
        │
        ├─→ Synergy Agent → Career Alignment
        ├─→ Risk Agent → Competitive Analysis
        └─→ Roadmap Agent → Development Plan
        │
        ▼
Return Comprehensive Analysis (JSON)
        │
        ▼
Frontend Visualization
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.13+**
- **Node.js 18+**
- **npm or yarn**

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/rajkaran126/KAPP.git
cd KAPP
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
python -m uvicorn main:app --reload
```

Backend will run on: `http://localhost:8000`  
API Docs available at: `http://localhost:8000/docs`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Quick Test

1. Open `http://localhost:5173` in your browser
2. You'll see the KAPP landing page with neon aesthetics
3. Upload a resume PDF (drag & drop or click to select)
4. Click "Analyze Resume"
5. Watch the loading animation
6. View comprehensive analysis with interactive charts
7. Export results as PDF using the "Export to PDF" button

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### **POST** `/analyze/`

Analyze a resume and return comprehensive career insights.

**Request:**
- **Content-Type:** `multipart/form-data`
- **Body Parameter:**
  - `file` (required): PDF file of the resume

**Example using cURL:**
```bash
curl -X POST "http://localhost:8000/analyze/" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@resume.pdf"
```

**Response:** (200 OK)
```json
{
  "analysis": {
    "general_strength_score": 85,
    "market_alignment_score": 78,
    "recommended_role": "Full Stack Developer",
    "strongest_domain": "Frontend",
    "top_3_skills": ["React", "Python", "Docker"],
    "ranked_skills": ["React", "Python", "Docker", "FastAPI", "PostgreSQL"],
    "skill_depth_breakdown": {
      "React": "Advanced",
      "Python": "Intermediate",
      "Docker": "Basic"
    },
    "domain_strength_breakdown": {
      "Frontend": 4,
      "Backend": 3,
      "DevOps": 2,
      "Data & AI": 1
    },
    "role_match_breakdown": {
      "Full Stack Developer": 4,
      "Frontend Developer": 3,
      "Backend Developer": 2
    },
    "missing_skills_for_best_role": ["Kubernetes", "GraphQL"],
    "career_alignment_analysis": "...",
    "skill_synergy_analysis": "...",
    "roadmap": {
      "Week 1": "Master GraphQL...",
      "Week 2": "Learn Kubernetes basics...",
      "Week 3": "Build microservices...",
      "Week 4": "Deploy to production..."
    },
    "resume_complexity": "Moderate",
    "extraction_confidence": "High",
    "placement_probability_estimate": "Strong",
    "competitive_summary": "Well-positioned...",
    "risk_index": "Low Risk"
  },
  "detected_skills": ["React", "Python", "Docker", ...]
}
```

**Error Responses:**
- `400 Bad Request`: Invalid file format (only PDF accepted)
- `500 Internal Server Error`: Processing error

#### **GET** `/docs`

Interactive Swagger UI documentation for the API.

#### **GET** `/`

Health check endpoint.

**Response:**
```json
{
  "message": "KAPP Career Intelligence API is running!"
}
```

---

## 🎨 Frontend Features

### Component Structure

```
frontend/src/
├── components/
│   ├── LandingPage.jsx          # Upload interface
│   ├── LandingPage.css
│   ├── AnalysisResults.jsx      # Results dashboard
│   ├── AnalysisResults.css
│   └── LoadingScreen.jsx        # Loading animation
├── App.jsx                       # Main app component
├── index.css                     # Global styles & design system
└── main.jsx                      # React entry point
```

### Design System

**Color Palette:**
```css
--neon-teal: #00FFD1         /* Primary brand color */
--electric-blue: #00D4FF     /* Accent & charts */
--hot-pink: #FF006E          /* Highlights */
--cyber-purple: #8B5CF6      /* Gradients */
--vibrant-gold: #FFD700      /* Stats & badges */
```

**Typography:**
- **Display Font:** Orbitron (futuristic, tech-focused)
- **Body Font:** Rajdhani (clean, readable)

**Effects:**
- Glassmorphism: `backdrop-filter: blur(20px)`
- Neon glow: `drop-shadow(0 0 20px rgba(0, 255, 209, 0.4))`
- Smooth transitions: `cubic-bezier(0.23, 1, 0.32, 1)`

### Key UI Components

1. **Loading Screen**
   - Animated KAPP logo with glow pulse
   - Shimmer progress bar
   - Caption: "AI CAREER MAP NAVIGATOR"

2. **Stats Cards**
   - CountUp animations (0 → final value)
   - Progress bars with shimmer effect
   - Glassmorphic containers

3. **Interactive Charts**
   - **Radar Chart**: Domain strength visualization
   - **Bar Chart**: Role match breakdown (color-coded)
   - Custom tooltips with dark theme
   - Smooth animations on load

4. **PDF Export**
   - Captures entire results page
   - Maintains styling and charts
   - Downloads as "KAPP_Career_Analysis.pdf"

---

## 📁 Project Structure

```
KAPP/
├── backend/
│   ├── agents/
│   │   ├── skill_agent.py        # Skill extraction & analysis
│   │   ├── role_agent.py         # Role matching logic
│   │   ├── roadmap_agent.py      # Career roadmap generation
│   │   ├── synergy_agent.py      # Skill synergy analysis
│   │   └── risk_agent.py         # Risk assessment
│   ├── main.py                   # FastAPI application
│   ├── orchestrator.py           # Agent coordination
│   ├── utils.py                  # Helper functions
│   ├── skills.py                 # Skill database (100+ skills)
│   ├── roles.py                  # Role definitions (30+ roles)
│   ├── domain_map.py             # Skill-to-domain mapping
│   ├── skill_weights.py          # Skill importance weights
│   └── requirements.txt          # Python dependencies
│
├── frontend/
│   ├── public/
│   │   └── background.html       # Animated particle background
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LandingPage.css
│   │   │   ├── AnalysisResults.jsx
│   │   │   ├── AnalysisResults.css
│   │   │   ├── LoadingScreen.jsx
│   │   │   └── LoadingScreen.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🧪 Testing

### Backend Testing

```bash
# Start backend
cd backend
python -m uvicorn main:app --reload

# Test with sample resume
curl -X POST "http://localhost:8000/analyze/" \
  -F "file=@sample_resume.pdf"
```

### Frontend Testing

```bash
# Start frontend
cd frontend
npm run dev

# Open browser to http://localhost:5173
# Upload a resume and verify:
# - Drag & drop works
# - Loading screen appears
# - Results display with animations
# - Charts are interactive
# - PDF export works
```

---

## 🎯 Hackathon Highlights

### What Makes KAPP Stand Out?

1. **🧠 Sophisticated AI Architecture**: Multi-agent system with specialized processing
2. **🎨 Premium Design**: Gen-Z aesthetic with glassmorphism and neon colors
3. **📊 Data Visualization**: Interactive, animated charts (not just static bars)
4. **⚡ Performance**: Fast analysis with smooth animations
5. **💼 Practical Value**: Real career guidance with actionable roadmaps
6. **🔧 Technical Polish**: PDF export, CountUp animations, Framer Motion
7. **📱 Responsive**: Works beautifully on all screen sizes

### Key Metrics

- **100+ Skills** in knowledge base
- **30+ Roles** for matching
- **5 Specialized Agents** working in parallel
- **4-Week Roadmap** generation
- **Interactive Charts** with real-time data
- **Sub-5s Analysis** time for average resume

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👥 Team

Built with ❤️ for the hackathon by [@rajkaran126](https://github.com/rajkaran126)

---

## 🙏 Acknowledgments

- FastAPI for the amazing backend framework
- React & Vite for blazing-fast frontend development
- Recharts for beautiful, responsive charts
- The open-source community

---

## 📧 Contact

For questions or feedback, please reach out via GitHub issues.

---

<div align="center">

**⭐ Star this repo if you found it helpful! ⭐**

Made with 🔥 and ☕

</div>
