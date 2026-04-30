from pydantic import BaseModel

class ProgressUpdate(BaseModel):
    course_id: str
    completed_lessons: int
    total_lessons: int
    