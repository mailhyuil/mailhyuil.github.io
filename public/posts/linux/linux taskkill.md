# taskkill

## window

```sh
netstat -ano | findstr :port
taskkill /f /pid [PID]
```

## linux

```sh
netstat -ano | grep :port
kill -9 [PID]
```

## mac

```sh
sudo lsof -i :portnumber
kill -9 [PID]
```
