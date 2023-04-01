# nodejs websocket

## install

```
npm i socket.io // 백엔드 서버
npm i socket.io-client // 프론트엔드 서버
```

## 사용법

### 백엔드

```
const server = app.listen(config.host.port)

const socketIO = new Server(server,{
    cors:{
        origin:'*'
    }
})

socketIO.on('connection', (socket) => {
    console.log('Client is here!!')
    socketIO.emit('my-event', 'data')
})

setInterval(()=>{
    socketIO.emit('my-event', 'data');
}, 1000)
```

### 프론트엔드

```
const socketIO = socket(SERVER_URL)
socketIO.on('my-event', (msg) => {
    console.log(msg)
})
```
