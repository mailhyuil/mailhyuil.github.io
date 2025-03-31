# python fastapi

## install

```sh
python -m venv .venv

# activate venv (mac)
source .venv/bin/activate
# activate venv (window) powershell에서 실행해야한다.
.venv\Scripts\activate

pip install fastapi uvicorn
python -m pip install fastapi uvicorn

# 실행
uvicorn main:app --reload
```

## app.py

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```
