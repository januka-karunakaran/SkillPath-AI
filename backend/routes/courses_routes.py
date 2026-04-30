from fastapi import APIRouter
from bson import ObjectId
from database import courses_collection

router = APIRouter(prefix="/courses", tags=["Courses"])

def serialize_course(course):
    return {
        "id": str(course["_id"]),
        "title": course["title"],
        "description": course["description"],
        "level": course["level"],
        "duration": course["duration"],
        "rating": course["rating"],
        "locked": course.get("locked", False)
    }

@router.get("/")
def get_courses():
    courses = list(courses_collection.find())
    return [serialize_course(course) for course in courses]

@router.post("/seed")
def seed_courses():
    courses_collection.delete_many({})

    courses_collection.insert_many([
        {
            "title": "HTML & CSS Fundamentals",
            "description": "Learn the building blocks of web development.",
            "level": "Beginner",
            "duration": "4 weeks",
            "rating": 4.8,
            "locked": False
        },
        {
            "title": "JavaScript Essentials",
            "description": "Master JavaScript basics and logic.",
            "level": "Intermediate",
            "duration": "6 weeks",
            "rating": 4.9,
            "locked": True
        },
        {
            "title": "React & Modern Frameworks",
            "description": "Build modern frontend apps with React.",
            "level": "Advanced",
            "duration": "8 weeks",
            "rating": 4.7,
            "locked": True
        }
    ])

    return {"message": "Courses seeded successfully"}