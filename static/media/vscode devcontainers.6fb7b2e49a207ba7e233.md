# vscode devcontainers

- devcontainers extension 설치
- devcontainer.json 파일 생성 및 설정
- Docker 컨테이너 기반 개발 환경 구축
- 팀 간 일관된 개발 환경 공유 가능
- Command Palette에서 "Dev Containers: Reopen in Container" 실행
- 컨테이너 내에서 코드 편집 및 실행

## .devcontainer/devcontainer.json

```json
{
  "name": "My Dev Container",
  "dockerFile": "Dockerfile",
  "context": "..",
  "settings": {
    "terminal.integrated.shell.linux": "/bin/bash"
  },
  "extensions": ["ms-python.python", "esbenp.prettier-vscode"]
}
```

## .devcontainer/Dockerfile

```dockerfile
# Use the official Python image from the Docker Hub
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Command to run the application
CMD ["python", "app.py"]
```

## .devcontainer/docker-compose.yml

```yaml
# .devcontainer/docker-compose.yml
version: "3.9"
services:
  app:
    build: .
    volumes:
      - ..:/workspace:cached
    command: npm run dev
    depends_on:
      - db
      - redis
  db:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: onepartners
    ports:
      - "5434:5432"
  redis:
    image: redis:latest
    restart: always
    ports:
      - "6379:6379"
```
