from pydantic import BaseModel

class Course(BaseModel):
    title: str
    description: str
    level: str
    duration: str
    rating: float