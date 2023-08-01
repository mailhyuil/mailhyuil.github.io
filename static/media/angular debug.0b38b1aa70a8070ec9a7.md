# angular debug

> npm run start로 4200 포트로 실행 상태에서 같은 4200 포트로 디버깅 모드를 실행!
>
> > F5 로 디버깅 모드 실행 (Ctrl + F5는 일반 모드로 실행하는 것)

## launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```
