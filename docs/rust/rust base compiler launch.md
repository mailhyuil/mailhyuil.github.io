# launch

> launch.json 설정파일을 읽어서 자동으로 빌드 런을 할 수 있다.
>
> > ctrl + F5

## launch.json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "lldb",
      "request": "launch",
      "name": "aa'",
      "cargo": {
        "args": ["run"]
      },
      "cwd": "${workspaceFolder}"
    }
  ]
}
```
