from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'atSysMsUser'
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    password = Column(String(128), nullable=False)
    fullname = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    created_by = Column(Integer, nullable=False)
    created_at = Column(String, default='CURRENT_TIMESTAMP')
    modified_by = Column(Integer, nullable=False)
    modified_at = Column(String, default='CURRENT_TIMESTAMP')
    is_active = Column(Integer, default=1)