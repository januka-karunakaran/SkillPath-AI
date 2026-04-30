import os
import bcrypt
import jwt
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

SECRET = os.getenv("JWT_SECRET")
ALGORITHM = os.getenv("JWT_ALGORITHM")

def hash_password(password: str):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str):
    return bcrypt.checkpw(password.encode(), hashed.encode())

def create_token(user_id: str, email: str):
    payload = {
        "user_id": user_id,
        "email": email,
        "exp": datetime.utcnow() + timedelta(days=7)
    }
    return jwt.encode(payload, SECRET, algorithm=ALGORITHM)