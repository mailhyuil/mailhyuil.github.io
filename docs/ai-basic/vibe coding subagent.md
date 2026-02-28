# ai vibe coding subagent

## Subagent Session 생성

```sh
claude subagent create <subagent-name>
claude subagent create <subagent-name> --role <role> --description <description> --tools <tools>

claude subagent list
```

## Main(Leader) Agent Session에서 Subagent Session 호출

```sh
@<subagent-name> <subagent-prompt>
```

## Leader가 알아서 명령하도록

```sh
You are a leader agent.

When a task involves:
  - writing tests → delegate to @test-writer
  - refactoring → delegate to @refactorer
  - reviewing types → delegate to @reviewer

You must not do their job directly.
```

## Subagent의 책임을 명확히

```txt
@leader
전체 작업 분석
작업 분해
어떤 agent가 필요한지 판단
최종 결과 통합

@implementation-agent
코드 작성만
설계 수정 금지

@error-review-agent
예외 처리 / HTTP 코드 / 타입 체크만

@test-agent
unit + e2e 생성만
```
