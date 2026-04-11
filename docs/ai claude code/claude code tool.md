# claude code tool

```sh
Agent # 작업을 처리하기 위해 자체 context window를 가진 subagent를 생성합니다
AskUserQuestion # 요구사항을 수집하거나 모호함을 명확히 하기 위해 객관식 질문을 합니다
Bash # 환경에서 shell 명령을 실행합니다. Bash 도구 동작 참조
CronCreate # 현재 세션 내에서 반복 또는 일회성 프롬프트를 예약합니다(Claude 종료 시 사라짐). 예약된 작업 참조
CronDelete # ID로 예약된 작업을 취소합니다
CronList # 세션의 모든 예약된 작업을 나열합니다
Edit # 특정 파일에 대한 대상 편집을 수행합니다
EnterPlanMode # Plan Mode로 전환하여 코딩 전에 접근 방식을 설계합니다
EnterWorktree # 격리된 git worktree를 생성하고 전환합니다
ExitPlanMode # 승인을 위한 계획을 제시하고 Plan Mode를 종료합니다
ExitWorktree # worktree 세션을 종료하고 원래 디렉토리로 돌아갑니다
Glob # 패턴 매칭을 기반으로 파일을 찾습니다
Grep # 파일 내용에서 패턴을 검색합니다
ListMcpResourcesTool # 연결된 MCP servers에서 노출된 리소스를 나열합니다
LSP # 언어 서버를 통한 코드 인텔리전스: 정의로 이동, 참조 찾기, 타입 오류 및 경고 보고. LSP 도구 동작 참조
NotebookEdit # Jupyter 노트북 셀을 수정합니다
PowerShell # Windows에서 PowerShell 명령을 실행합니다. 옵트인 미리보기입니다. PowerShell 도구 참조
Read # 파일의 내용을 읽습니다
ReadMcpResourceTool # URI로 특정 MCP 리소스를 읽습니다
SendMessage # agent team 팀원에게 메시지를 보내거나, agent ID로 subagent를 재개합니다. 중지된 subagent는 백그라운드에서 자동으로 재개됩니다. CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1이 설정되었을 때만 사용 가능합니다
Skill # 주 대화 내에서 skill을 실행합니다
TaskCreate # 작업 목록에 새 작업을 생성합니다
TaskGet # 특정 작업의 전체 세부 정보를 검색합니다
TaskList # 현재 상태와 함께 모든 작업을 나열합니다
TaskOutput # (더 이상 사용되지 않음) 백그라운드 작업에서 출력을 검색합니다. 작업의 출력 파일 경로에서 Read를 사용하는 것을 권장합니다
TaskStop # ID로 실행 중인 백그라운드 작업을 종료합니다
TaskUpdate # 작업 상태, 종속성, 세부 정보를 업데이트하거나 작업을 삭제합니다
TeamCreate # 여러 팀원이 있는 agent team을 생성합니다. CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1이 설정되었을 때만 사용 가능합니다
TeamDelete # agent team을 해산하고 팀원 프로세스를 정리합니다. CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1이 설정되었을 때만 사용 가능합니다
TodoWrite # 세션 작업 체크리스트를 관리합니다. 비대화형 모드 및 Agent SDK에서 사용 가능합니다. 대화형 세션은 대신 TaskCreate, TaskGet, TaskList, TaskUpdate를 사용합니다
ToolSearch # tool search가 활성화되었을 때 지연된 도구를 검색하고 로드합니다
WebFetch # 지정된 URL에서 콘텐츠를 가져옵니다
WebSearch # 웹 검색을 수행합니다
Write # 파일을 생성하거나 덮어씁니다
```
