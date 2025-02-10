from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models.user_model import User
from schemas.user_schema import UserCreate
from core.auth import AuthService

async def create_user_service(db: AsyncSession, user: UserCreate):
    db_user = User(name=user.user_name, email=user.user_email, user_fullname=user.user_fullname, user_number=user.user_number, created_by=user.created_by, created_at=user.created_at, modified_by=user.modified_by, modified_at=user.modified_at, is_active=user.is_active)
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

async def get_user_service(db: AsyncSession):
    result = await db.execute(select(User))
    return result.scalars().all()

async def login_user_service(db: AsyncSession, user_name: str, user_pass: str):
    result = await db.execute(select(User).filter(User.user_name == user_name))
    user = result.scalars().first()

    if not user:
        return None  # Jika user tidak ditemukan

    if not AuthService.check_password(user_pass, user.user_pass):  
        return None  # Jika password salah

    return {
        "user_id": user.user_id,
        "user_name": user.user_name,
        "user_fullname": user.user_fullname,
        "user_email": user.user_email,
        "is_active": user.is_active
    }

