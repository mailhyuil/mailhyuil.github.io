# frontmatter

skill, rules, agents md파일 상단에 위치한 yaml 형식의 메타데이터입니다. skill과 rules의 이름과 설명을 정의하는 데 사용됩니다.

## skills

```sh
name # skill의 표시 이름. 생략하면 디렉토리 이름을 사용합니다. 소문자, 숫자 및 하이픈만 사용 가능(최대 64자).
description # (권장) skill이 무엇을 하는지, 언제 사용할지. Claude는 이를 사용하여 skill을 자동으로 적용할 시기를 결정합니다. 생략하면 markdown 콘텐츠의 첫 번째 단락을 사용합니다. 주요 사용 사례를 앞에 배치합니다: 250자보다 긴 설명은 컨텍스트 사용을 줄이기 위해 skill 목록에서 잘립니다.
argument-hint # 예상 인수를 나타내기 위해 자동 완성 중에 표시되는 힌트. 예: [issue-number] 또는 [filename] [format].
disable-model-invocation # Claude가 이 skill을 자동으로 로드하는 것을 방지하려면 true로 설정합니다. /name으로 수동으로 트리거하려는 워크플로우에 사용합니다. 기본값: false.
user-invocable # / 메뉴에서 숨기려면 false로 설정합니다. 사용자가 직접 호출하지 않아야 하는 배경 지식에 사용합니다. 기본값: true.
allowed-tools # 이 skill이 활성화되었을 때 Claude가 권한을 요청하지 않고 사용할 수 있는 도구. 공백으로 구분된 문자열 또는 YAML 목록을 허용합니다.
model # 이 skill이 활성화되었을 때 사용할 모델.
effort # 노력 수준 - 이 skill이 활성화되었을 때. 세션 노력 수준을 재정의합니다. 기본값: 세션에서 상속. 옵션: low, medium, high, max (Opus 4.6만 해당).
context # forked subagent 컨텍스트에서 실행하려면 fork로 설정합니다.
agent # context: fork가 설정되었을 때 사용할 subagent 유형.
hooks # 이 skill의 라이프사이클에 범위가 지정된 hooks. 구성 형식은 Skills 및 agents의 Hooks를 참조하세요.
paths # 이 skill이 활성화되는 시기를 제한하는 Glob 패턴. 쉼표로 구분된 문자열 또는 YAML 목록을 허용합니다. 설정하면 Claude는 패턴과 일치하는 파일로 작업할 때만 자동으로 skill을 로드합니다. 경로별 규칙과 동일한 형식을 사용합니다.
shell # 이 skill의 !`command` 블록에 사용할 shell. bash(기본값) 또는 powershell을 허용합니다. powershell을 설정하면 Windows에서 PowerShell을 통해 인라인 shell 명령어를 실행합니다. CLAUDE_CODE_USE_POWERSHELL_TOOL=1이 필요합니다.
```

## rules

```md
---
paths:
  - "src/api/**/*.ts"
---

# API 개발 규칙

- 모든 API 엔드포인트는 입력 검증을 포함해야 합니다
- 표준 오류 응답 형식을 사용합니다
- OpenAPI 문서 주석을 포함합니다
```

## agents

```sh
name # (필수) 소문자 및 하이픈을 사용한 고유 식별자
description # (필수) Claude가 이 subagent에 위임해야 할 때
tools # Subagent가 사용할 수 있는 도구. 생략하면 모든 도구 상속
disallowedTools # 거부할 도구, 상속되거나 지정된 목록에서 제거됨
model # 사용할 모델: sonnet, opus, haiku, 전체 모델 ID (예: claude-opus-4-6), 또는 inherit. 기본값: inherit
permissionMode # 권한 모드: default, acceptEdits, auto, dontAsk, bypassPermissions, 또는 plan
maxTurns # Subagent가 중지되기 전의 최대 에이전트 턴 수
skills # 시작 시 subagent의 컨텍스트에 로드할 skills. 호출 가능하게 만들어지는 것이 아니라 전체 skill 콘텐츠가 주입됩니다. Subagent는 부모 대화에서 skills를 상속하지 않습니다
mcpServers # 이 subagent에서 사용 가능한 MCP servers. 각 항목은 이미 구성된 서버를 참조하는 서버 이름 (예: "slack") 또는 서버 이름을 키로 하고 전체 MCP server config를 값으로 하는 인라인 정의입니다
hooks # 이 subagent로 범위가 지정된 라이프사이클 hooks
memory # 지속적 메모리 범위: user, project, 또는 local. 교차 세션 학습 활성화
background # 이 subagent를 항상 background task로 실행하려면 true로 설정합니다. 기본값: false
effort # 이 subagent가 활성화될 때의 노력 수준. 세션 노력 수준을 재정의합니다. 기본값: 세션에서 상속. 옵션: low, medium, high, max (Opus 4.6만 해당)
isolation # Subagent를 임시 git worktree에서 실행하려면 worktree로 설정하여 저장소의 격리된 복사본을 제공합니다. Subagent가 변경 사항을 만들지 않으면 worktree가 자동으로 정리됩니다
color # 작업 목록 및 트랜스크립트에서 subagent의 표시 색상입니다. red, blue, green, yellow, purple, orange, pink, 또는 cyan을 허용합니다
initialPrompt # 이 에이전트가 주 세션 에이전트로 실행될 때 (--agent 또는 agent 설정을 통해) 첫 번째 사용자 턴으로 자동 제출됩니다. Commands 및 skills가 처리됩니다. 사용자 제공 프롬프트에 앞에 붙습니다
```
