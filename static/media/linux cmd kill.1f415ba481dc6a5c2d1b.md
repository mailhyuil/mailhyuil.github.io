# linux cmd kill

## linux

```sh
netstat -ano | grep :port
kill [PID] # SIGTERM 정상 종료
kill -9 [PID] # SIGKILL 강제 종료
```

## mac

```sh
lsof -i :portnumber
kill [PID] # SIGTERM 정상 종료
kill -9 [PID] # SIGKILL 강제 종료
```

## window

```sh
netstat -ano | findstr :port
taskkill /pid [PID] # SIGTERM 정상 종료
taskkill /f /pid [PID] # SIGKILL 강제 종료
```
