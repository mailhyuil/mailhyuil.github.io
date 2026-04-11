# worktree workflow

## git worktree로 여러 브랜치를 동시에 작업하기

```sh
git worktree add ../auth feature/auth
git worktree add ../payment feature/payment
git worktree add ../ui feature/ui
```

## 하나의 worktree당 하나의 agent

```sh
Agent1 → /auth → "JWT 로그인 만들어"
Agent2 → /payment → "Toss 결제 붙여"
Agent3 → /ui → "Tailwind 리팩토링 해"
```

## 각자 작업한 후, 커밋 및 main 브랜치에 PR 날리기

```sh
git add .
git commit -m "feat: auth"
git push origin feature/auth
# 이후 GitHub에서 PR 생성
```

## 완료 후 정리

```sh
git worktree remove ../auth
git worktree remove ../payment
git worktree remove ../ui
```
