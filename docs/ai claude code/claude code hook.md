# hook

Claude Code 작업 전후에 셸 명령을 실행할 수 있습니다

## .claude/hooks/hooks.json

Bash 툴이 rm \* 명령일 시 .claude/hooks/block-rm.sh를 먼저 실행

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "if": "Bash(rm *)",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-rm.sh"
          }
        ]
      }
    ]
  }
}
```

## .claude/hooks/block-rm.sh

rm를 block하는 json을 리턴

```sh
#!/bin/bash
# .claude/hooks/block-rm.sh
COMMAND=$(jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q 'rm -rf'; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Destructive command blocked by hook"
    }
  }'
else
  exit 0  # allow the command
fi
```

## hook events

```sh
SessionStart # When a session begins or resumes
UserPromptSubmit # When you submit a prompt, before Claude processes it
PreToolUse # Before a tool call executes. Can block it
PermissionRequest # When a permission dialog appears
PermissionDenied # When a tool call is denied by the auto mode classifier. Return {retry: true} to tell the model it may retry the denied tool call
PostToolUse # After a tool call succeeds
PostToolUseFailure # After a tool call fails
Notification # When Claude Code sends a notification
SubagentStart # When a subagent is spawned
SubagentStop # When a subagent finishes
TaskCreated # When a task is being created via TaskCreate
TaskCompleted # When a task is being marked as completed
Stop # When Claude finishes responding
StopFailure # When the turn ends due to an API error. Output and exit code are ignored
TeammateIdle # When an agent team teammate is about to go idle
InstructionsLoaded # When a CLAUDE.md or .claude/rules/*.md file is loaded into context. Fires at session start and when files are lazily loaded during a session
ConfigChange # When a configuration file changes during a session
CwdChanged # When the working directory changes, for example when Claude executes a cd command. Useful for reactive environment management with tools like direnv
FileChanged # When a watched file changes on disk. The matcher field specifies which filenames to watch
WorktreeCreate # When a worktree is being created via --worktree or isolation: "worktree". Replaces default git behavior
WorktreeRemove # When a worktree is being removed, either at session exit or when a subagent finishes
PreCompact # Before context compaction
PostCompact # After context compaction completes
Elicitation # When an MCP server requests user input during a tool call
ElicitationResult # After a user responds to an MCP elicitation, before the response is sent back to the server
SessionEnd # When a session terminates
```
