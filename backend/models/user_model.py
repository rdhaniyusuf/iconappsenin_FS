from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, LargeBinary
from sqlalchemy.orm import relationship
from core.database import Base
import datetime

class User(Base):
    __tablename__ = "at_sys_msuser"
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(50), nullable=False, unique=True)
    user_fullname = Column(String(100), nullable=False)
    user_pass = Column(String(255), nullable=False)
    user_email = Column(String(100), nullable=False, unique=True)
    user_number = Column(String(20), nullable=False, unique=True)
    user_image = Column(LargeBinary, nullable=True)  # BYTEA is not directly supported, use String or LargeBinary
    created_by = Column(Integer, nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.datetime.now(datetime.timezone.utc))
    modified_by = Column(Integer, nullable=False)
    modified_at = Column(TIMESTAMP, default=datetime.datetime.now(datetime.timezone.utc), onupdate=datetime.datetime.now(datetime.timezone.utc))
    is_active = Column(Boolean, default=True)
