import bcrypt
import jwt
import datetime
import os
from typing import Any

class AuthService:
    @staticmethod
    async def hash_password(password: str) -> str:
        return await bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(rounds=15, prefix=b"2b")).decode('utf-8')

    @staticmethod
    def check_password(pass_in: str, pass_out: str) -> bool:
        bcrypt.gensalt(rounds=15, prefix=b"2b")
        return bcrypt.checkpw(pass_in.encode('utf-8'), pass_out.encode('utf-8'))

    @staticmethod
    async def generate_jwt(user: Any) -> str:
        payload = {
            'user_id': user.id,
            'user_name': user.username,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=1)
        }
        secret_key = os.getenv('JWT_SECRET_KEY', 'default_secret_key')
        token = jwt.encode(payload, secret_key, algorithm='HS256')
        return await token