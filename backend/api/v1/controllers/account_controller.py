from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from core.database import get_db
from schemas.user_schema import UserCreate, UserResponse,UserLogin
from services.user_service import create_user_service, get_user_service, login_user_service

router = APIRouter()

# Endpoint untuk menambahkan user baru
@router.post("/register", response_model=UserResponse)
async def register_user_controller(user: UserCreate, db: AsyncSession = Depends(get_db)):
    return await create_user_service(db, user)

# Endpoint untuk login user
@router.post("/login")
async def login_user_controller(user: UserLogin, db: AsyncSession = Depends(get_db)):
    user_data = await login_user_service(db, user.user_name, user.user_pass)

    if not user_data:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful", "user": user_data}

# Endpoint untuk mendapatkan semua user
@router.get("/", response_model=List[UserResponse])
async def list_users(db: AsyncSession = Depends(get_db)):
    return await get_user_service(db)
