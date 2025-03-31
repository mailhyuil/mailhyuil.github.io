# linux cmd kill

## linux

```sh
netstat -pan | grep :port
kill [PID] # SIGTERM 정상 종료
kill -9 [PID] # SIGKILL 강제 종료
```

## mac

```sh
lsof -i :port
# or
netstat -pan | grep :port


kill [PID] # SIGTERM 정상 종료
kill -9 [PID] # SIGKILL 강제 종료
```

## window

```sh
netstat -pan | findstr :port
taskkill /pid [PID] # SIGTERM 정상 종료
taskkill /f /pid [PID] # SIGKILL 강제 종료
```
