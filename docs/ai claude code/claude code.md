# claude code

## install

```sh
# macOS / Linux (권장)
curl -fsSL https://claude.ai/install.sh | bash

# 기본 대화형 세션 시작
claude

# 초기 프롬프트와 함께 실행 (실행 후 세션 유지)
claude "Nuxt MFE 프로젝트 구조 분석해 줘"

# 🛡️ 자동 모드 (Auto Mode) - 권장
# 안전한 샌드박스 내에서 번거로운 승인 과정(Y/n)을 건너뜀
claude --enable-auto-mode

# 🚨 Danger Mode (모든 권한 프롬프트 무시)
# 주의: 모든 보호 장치가 해제되므로 깃 커밋이 완료된 상태거나,
# 격리된 컨테이너 환경에서만 사용하세요.
claude --dangerously-skip-permissions
```

## 명령어

```txt
/init : 프로젝트 루트에 CLAUDE.md 파일을 생성합니다. (프로젝트 아키텍처, 코딩 컨벤션, PR 규칙 등을 정의해 두면 Claude가 매 세션마다 이를 읽고 지침을 따릅니다.)
/model : 사용할 AI 모델을 변경합니다 (예: Sonnet 3.5, Opus 등).
/clear : 현재 대화 맥락을 초기화하고 새 주제로 시작합니다.
/compact : 대화가 길어졌을 때 핵심 맥락만 남기고 압축하여 토큰을 절약합니다.
/help : 사용 가능한 전체 명령어와 커스텀 명령어를 확인합니다.

@dir_name (폴더이름)
@file_name (파일이름)
@extension (확장자)

#Text : claude.md에 추가할 내용
```

## 디렉토리 (.claude)

```txt
/settings.json : 설정 파일
/settings.local.json : 로컬 설정 파일

/agents : subagent를 자연어로 설정
/output-style : output style을 자연어로 설정
```
