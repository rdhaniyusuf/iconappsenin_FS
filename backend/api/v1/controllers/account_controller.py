from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from core.database import get_db
from schemas.user_schema import UserCreate, UserResponse
from services.user_service import create_user, get_users, get_user_by_id, delete_user, user_login

router = APIRouter()

# Endpoint untuk menambahkan user baru
@router.post("/", response_model=UserResponse)
async def register_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
    return await create_user(db, user)

# Endpoint untuk mendapatkan semua user
@router.get("/", response_model=List[UserResponse])
async def list_users(db: AsyncSession = Depends(get_db)):
    return await get_users(db)

# Endpoint untuk mendapatkan user berdasarkan ID
@router.get("/{user_id}", response_model=UserResponse)
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Endpoint untuk menghapus user berdasarkan ID
@router.delete("/{user_id}")
async def remove_user(user_id: int, db: AsyncSession = Depends(get_db)):
    success = await delete_user(db, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}

# Endpoint untuk login user
@router.post("/login")
async def login_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
    user_data = await user_login(db, user)
    if not user_data:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return user_data
