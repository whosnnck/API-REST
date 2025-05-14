# 📡 API REST - Proyecto de Ingeniería de Software

Este repositorio contiene el desarrollo de una API REST para gestión de productos, creada como parte del proyecto académico de la materia **Ingeniería de Software**. Utiliza **Python** y el microframework **Flask** para exponer endpoints que permiten realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de productos.

---

## ⚙️ Tecnologías Utilizadas

- **Python 3**
- **Flask** - Framework para construir APIs RESTful.
- **SQLite** - Base de datos relacional ligera.
- **Postman** - Para pruebas de endpoints (opcional).
- **JSON** - Formato para el intercambio de datos.

---

## 🚀 Cómo Empezar

### 1. Clonar el repositorio

Para obtener una copia local del repositorio, usa el siguiente comando:

```bash
git clone https://github.com/whosnnck/API-REST.git
cd API-REST
```
### 2. Crear entorno virtual (opcional pero recomendado)
```bash
python -m venv venv
source venv/bin/activate    # En Linux/Mac
venv\Scripts\activate       # En Windows
```
Para activar el entorno virtual:

- En Linux/Mac:
```bash
source venv/bin/activate
```
- En Windows
```bash
venv\Scripts\activate
```
### 3. Instalar dependencias
Instala las dependencias necesarias utilizando el archivo requirements.txt
```bash
pip install -r requirements.txt
```
### 4. Ejecutar la API
Para iniciar la API, ejecuta:
```bash
python app.py
```

La API estará disponible en: `http://127.0.0.1:5000/`

---

## 📚 Endpoints Principales

| Método | Endpoint           | Descripción                       |
|--------|--------------------|-----------------------------------|
| GET    | /productos         | Listar todos los productos        |
| GET    | /productos/<id>    | Obtener un producto por ID        |
| POST   | /productos         | Crear un nuevo producto           |
| PUT    | /productos/<id>    | Actualizar un producto existente  |
| DELETE | /productos/<id>    | Eliminar un producto             




