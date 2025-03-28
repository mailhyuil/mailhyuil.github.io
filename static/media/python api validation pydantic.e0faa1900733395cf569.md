# python api validation pydantic

## install

```sh
poetry add pydantic
```

## usage

```py
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    email: str

user = User(id=1, name="유휴일", email="mailhyuil@gmail.com")

print(user)
```
