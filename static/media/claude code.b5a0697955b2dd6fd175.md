# claude code

## install

```sh
# 설치
pnpm i -g @anthropic-ai/claude-code

# 실행
claude
# 오토모드로 실행 (퍼미션을 요구하지 않음)
claude --dangerously-skip-permissions
# mcp 추가
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
/mcp : mcp 리스트 출력

@dir_name (폴더이름)
@file_name (파일이름)
@extension (확장자)
```

## Pro 플랜 사용

- 시간당 요청 수 제한이 있음

## Anthropic Console API 사용

- **직접 API 호출 가능**: Anthropic의 콘솔을 통해 Claude 모델에 직접 요청을 보낼 수 있습니다.
- **유연한 설정**: 시스템 프롬프트와 사용자 프롬프트를 자유롭게 구성하여 다양한 작업을 수행할 수 있습니다.
- **비용 효율성**: 사용한 토큰 수에 따라 비용이 발생하며, 필요에 따라 사용량을 조절할 수 있습니다.
- **제한 사항**: 요청 수와 토큰 사용량에 대한 제한이 있으므로 사용 계획을 세우는 것이 중요합니다.
