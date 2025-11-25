# from datetime import datetime, timedelta
#
# from jwt import jwt
# from passlib.context import CryptContext
#
# from ..config import settings
#
# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
#
#
# def hash_password(password: str):
#     return pwd_context.hash(password)
#
#
# def verify_password(plain_pass, hashed_pass):
#     return pwd_context.verify(plain_pass, hashed_pass)
#
#
# def create_access_token(data: dict, expires_minutes=60):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + timedelta(minutes=expires_minutes)
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
#     return encoded_jwt

from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


def hash_password(password: str) -> str:
    """ Hashea la contraseña. Obvio! """
    return pwd_context.hash(password)


class UserInDB:
    def __init__(self,
                 nombre: str,
                 apellido: str,
                 codigo: int,
                 correo_electronico: str,
                 hashed_password: str):
        self.nombre = nombre
        self.apellido = apellido
        self.codigo = codigo
        self.correo_electronico = correo_electronico
        self.hashed_password = hashed_password
