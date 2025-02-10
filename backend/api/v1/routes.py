from fastapi import APIRouter
from api.v1.controllers import account_controller

router = APIRouter()

router.include_router(account_controller.router, prefix="/users", tags=["Users"])
