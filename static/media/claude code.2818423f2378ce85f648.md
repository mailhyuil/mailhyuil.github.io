# claude code

## install

```sh
# 설치
pnpm i -g @anthropic-ai/claude-code

# 실행
claude
# 실행 (오토모드) (퍼미션을 요구하지 않음)
claude --dangerously-skip-permissions

# mcp
claude mcp add <mcp_name>
claude mcp remove <mcp_name>
claude mcp list
```

## 명령어

```txt
/init : CLAUDE.md 파일 생성 (프로젝트 요약)
/ide : 사용중인 IDE에 연동
/model : AI model 설정
/resume : 이전 대화 내역
/permissions : 퍼미션 설정
/mcp : mcp 리스트 출력

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

## .mcp.json

> mcp를 공유

```json
{
  "mcpServers": {
    "shared-server": {
      "command": "/path/to/server",
      "args": [],
      "env": {}
    }
  }
}
```
