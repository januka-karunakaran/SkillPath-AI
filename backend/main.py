from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SkillRequest(BaseModel):
    skills: list[str]
    interest: str
    goal: str

@app.post("/generate-roadmap")
def generate(data: SkillRequest):
    return {
        "career": "Frontend Developer",
        "roadmap": [
            "Learn HTML, CSS",
            "Learn JavaScript",
            "Learn React",
            "Build Projects",
            "Apply for Jobs"
        ]
    }