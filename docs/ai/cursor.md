# cursor IDE

## .cursor/rules/\*.mdc or client(server)/.cursor/rules/\*.mdc

### Rule type

| Rule type       | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| Always          | 항상 모델 컨텍스트에 포함돼                                                |
| Auto Attachment | glob 패턴과 일치하는 파일이 참조될 때 포함돼                               |
| Agent Requested | AI가 포함 여부를 결정할 수 있도록 제공돼. description은 반드시 제공해야 해 |
| Manual          | @ruleName을 사용해 명시적으로 언급된 경우에만 포함돼                       |

### Rule syntax

```mdc
---
description: RPC 서비스 보일러플레이트
globs:
alwaysApply: false
---

- 서비스를 정의할 때는 내부 RPC 패턴을 사용해
- 서비스 이름은 항상 snake_case를 사용해

@service-template.ts
```

## 단축키

> ctrl + k : 커서 명령어 실행
>
> > ctrl + shift + i : 커서 인텔리센스 실행

## 프롬프트

> @dir_name (폴더이름)
>
> > 폴더 내의 파일 목록
>
> @file_name (파일이름)
>
> > 파일 내의 내용
>
> @extension (확장자)
>
> > 확장자 내의 파일 목록

## .cursorrules (legacy)

> 기존 커서룰 방식
