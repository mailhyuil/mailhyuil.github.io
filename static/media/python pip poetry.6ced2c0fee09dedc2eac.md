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
poetry env activate # 밑에 명려어가 나옴 그걸 그대로 다시 실행시켜주기
poetry env info # 밑에 Executable: <path>를 복사해서 vscode Python: Select Interpreter에 넣어 설정
deactivate # venv 종료

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
