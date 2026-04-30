from fastapi import APIRouter
from database import progress_collection
from models.progress_model import ProgressUpdate

router = APIRouter(prefix="/progress", tags=["Progress"])

@router.get("/{user_id}")
def get_progress(user_id: str):
    progress = progress_collection.find_one({"user_id": user_id})

    if not progress:
        return {
            "user_id": user_id,
            "percentage": 0,
            "completed_lessons": 0,
            "total_lessons": 0
        }

    return {
        "user_id": progress["user_id"],
        "course_id": progress["course_id"],
        "percentage": progress["percentage"],
        "completed_lessons": progress["completed_lessons"],
        "total_lessons": progress["total_lessons"]
    }

@router.post("/{user_id}")
def update_progress(user_id: str, data: ProgressUpdate):
    percentage = int((data.completed_lessons / data.total_lessons) * 100)

    progress_collection.update_one(
        {"user_id": user_id},
        {
            "$set": {
                "user_id": user_id,
                "course_id": data.course_id,
                "completed_lessons": data.completed_lessons,
                "total_lessons": data.total_lessons,
                "percentage": percentage
            }
        },
        upsert=True
    )

    return {
        "message": "Progress updated",
        "percentage": percentage
    }