# claude code agent team

## 활성화

~/.claude/settings.json

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

## tmux 후 프롬프팅

```sh
tmux
claude

create 4 teammates: planner, developer, designer, reviewer
planner: create a plan to build a todo list app, use opus 4.5
developer: write code to implement the plan, use sonnet 3.5
designer: create a design for the app, use opus 4.5
reviewer: review the code and design, provide feedback, use sonnet 3.5
task: build a todo list app
```
