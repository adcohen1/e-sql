from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

from utils.auth import hash_password

# from .routers import auth

app = FastAPI()


class CrearUsuario(BaseModel):
    nombre: str
    apellido: str
    codigo: str
    correo_electronico: str
    hashed_password: str


temp_db = {}


@app.post("https://roble-api.openlab.uninorte.edu.co/auth/:dbName/signup-direct", status_code=status.HTTP_201_CREATED)
async def signup(user: CrearUsuario):
    # 2. Validación y Hasheo de la Contraseña
    if user.correo_electronico in temp_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El correo ya está registrado"
        )

    # Hashear la contraseña antes de guardarla
    hashed_password = hash_password(user.password)

    # 3. Guardar el usuario en la Base de Datos
    new_user = {
        "nombre": user.nombre,
        "apellido": user.apellido,
        "codigo": user.codigo,
        "email": user.correo_electronico,
        "hashed_password": hashed_password
    }

    # Simulación de guardado
    temp_db[user.correo_electronico] = new_user

    # Opcional: Generar un JWT (JSON Web Token) al momento de registrarse
    # Este token se enviaría de vuelta a React para iniciar sesión automáticamente.
    # access_token = create_access_token(data={"sub": user.email})

    return {"message": "Usuario creado exitosamente"}
#
# app.include_router(auth.router)
#
#
# @app.get("/")
# def home():
#     return {"msg": "API running"}
