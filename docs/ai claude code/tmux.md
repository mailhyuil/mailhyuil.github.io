# tmux

## command

```sh
tmux -CC # iterm2에서 tmux를 사용할 때, 터미널 창으로 tmux 세션을 관리할 수 있게 해주는 옵션
tmux ls
tmux new -s <session-name> # 새로운 세션 생성
tmux attach -t <session-name> # 특정 세션에 연결
tmux detach # 현재 세션에서 분리
tmux kill-session -t <session-name> # 특정 세션 종료
tmux kill-server # 모든 세션 종료
```

## 단축키

```txt
Ctrl + d # 현재 세션 종료 후 터미널 닫기
Ctrl + b, 방향키 # 창 사이 이동
Ctrl + b, d: detach
Ctrl + b, c: 새 창 생성

Ctrl + b, %: 창을 수직으로 분할
Ctrl + b, ": 창을 수평으로 분할
Ctrl + b, x: 현재 창 닫기
```
