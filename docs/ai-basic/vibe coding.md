# ai vibe coding

## Subagent

리더 에이전트를 통해서 하위 에이전트를 생성하고 관리하는 방식이 가장 많이 사용됨

```txt
PM/Planner: 요구사항/유저 스토리/스코프 컷
Designer: 화면 IA, 컴포넌트 목록, UX 룰
Dev: 파일 수정/구현/리팩토링
QA/Test: 테스트 케이스/자동화/엣지케이스
Reviewer: 보안/성능/아키텍처 리뷰
```

### 산출물 강제

산출물을 강제하여 에이전트가 올바른 방향으로 작업을 수행하도록 함
산출물은 다음 context에 주입하여 context 최적화에도 사용됨

```txt
SPEC.md(기획)
DESIGN.md(UI/UX)
IMPLEMENTATION.md(구현 계획/변경 파일 목록)
TESTPLAN.md(테스트 시나리오)
```

## 프롬프트 엔지니어링

```txt
Role Prompting

Output Format(구조화) 강제

Few-shot (예시 몇 개 주기)

Step-by-step / CoT 유도
단계별로 생각하고 답해라.

Constraint Prompting (제약 조건 명확화)

Delimiter 활용 (구간 분리)
## ** __ 등을 사용하여 구간을 분리

Self-critique / Reflection
초안을 작성하고,
오류 가능성을 점검한 뒤
최종 답변을 제시하라.

Tool-aware Prompting (Agent용)
데이터가 부족하면 get_user_info 툴을 호출하라.
임의로 추측하지 말 것.
```

## MCP

Jira 티켓 만들기, Figma 파일 정보 읽기, DB 조회, CI 실행…

```txt
create_jira_issue, update_jira_issue
get_figma_frame, export_figma_assets
run_ci_pipeline, get_ci_status
query_db_readonly
```
