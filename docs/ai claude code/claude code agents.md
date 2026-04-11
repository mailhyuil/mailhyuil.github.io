# agents

## instruction file

```sh
/CLAUDE.md
/AGENTS.md

# Follow instructions in CLAUDE.md
```

## .claude/agents

역할 분리, 스킬 등

```md
---
name: agent-name
description: 이 에이전트가 전문으로 하는 분야와 Claude가 이를 호출해야 할 때
model: sonnet
effort: medium
maxTurns: 20
disallowedTools: Write, Edit
---

에이전트의 역할, 전문성 및 동작을 설명하는 상세한 시스템 프롬프트입니다.
```

## docs

참고 문서, 메모리 문서

```sh

```
