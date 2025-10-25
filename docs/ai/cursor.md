# cursor IDE

## .cursor 폴더

| 파일                   | 역할                                                        |
| ---------------------- | ----------------------------------------------------------- |
| `.cursor/rules.json`   | "스타일 가이드 + 아키텍처 원칙" = AI용 eslint/prettier 개념 |
| `.cursor/context.json` | 항상 공유되는 핵심 파일 세트(예: src/ + docs/API)           |
| `.cursor/memory.json`  | LLM이 “학습한” 장기 패턴. 프로젝트 특성 기억                |
| `.cursor/prompts/*.md` | 커스텀 프롬프트 레시피 저장                                 |
| `.cursorignore`        | Git의 `.gitignore` 처럼, AI가 안 읽게 하는 필터             |

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
