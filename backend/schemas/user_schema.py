from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    user_name: str
    user_email: EmailStr

class UserResponse(BaseModel):
    user_id: int
    user_name: str
    user_email: str

    class Config:
        from_attributes = True 