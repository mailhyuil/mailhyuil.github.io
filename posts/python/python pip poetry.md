# python pip poetry

## install

```sh
# install poetry
pip install poetry

# generate project
poetry new <project-name>

# generate pyproject.toml
poetry init

# install package
poetry install
poetry add <package>

# venv
poetry env activate
poetry env deactivate
poetry env info

# run outside of env
poetry run <command>
```

## pyproject.toml

```toml
[tool.poetry]
name = "fastapi-grpc-app"
version = "0.1.0"
description = "FastAPI + gRPC 프로젝트"
authors = ["Your Name <you@example.com>"]

[tool.poetry.dependencies]
python = "^3.10"
fastapi = "^0.95.0"
uvicorn = "^0.21.1"
grpcio = "^1.48.0"
grpcio-tools = "^1.48.0"
watchdog = "^3.0.0"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```
