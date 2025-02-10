from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    user_id: Optional[int]
    user_name: str
    user_pass: str
    user_fullname: str
    user_email: EmailStr
    user_number:str
    created_by:int
    created_at:str
    modified_by:int
    modified_at:str
    is_active:bool

class UserLogin(BaseModel):
    user_name: str
    user_pass: str 

class UserResponse(BaseModel):
    user_id: int
    user_name: str
    user_email: str

    class Config:
        from_attributes = True 