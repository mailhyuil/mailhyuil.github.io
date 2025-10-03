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
  "image": "mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm",
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:1": {}
  },
  "postCreateCommand": "pip install -r requirements.txt",
  "customizations": {
    "vscode": {
      "extensions": ["ms-python.python", "esbenp.prettier-vscode"]
    }
  },
  "remoteUser": "root"
}
```
