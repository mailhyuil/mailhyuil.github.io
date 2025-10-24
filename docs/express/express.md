# express

## express

## app

> express()가 반환하는 객체

## router

```
userRouter = express.Router()
```

[express API Document](https://expressjs.com/en/4x/api.html#express)

## middleware

> 미들웨어간에 전달되는 req모두 같은 객체
>
> > req.something으로 값을 넣어서 전달

```
app.use('/', (req, res, next)=>{
console.log('middleware 1')
const requestAt = new Date()
req.requestAt = requestAt

next()
})

app.use('/', (req, res, next)=>{
console.log(req.requestAt)
})

app.get()
app.post()
app.patch()
app.delete()
```

## static file

> 보통의 라우팅 핸들러와 똑같이 동작
>
> > express.static() 미들웨어를 use하면 된다.

```
app.use('/public', express.static('src/public'))

link(rel=stylesheet href=/index.css)
```

## error-handling

> 매개변수를 4개 사용하면 자동으로 에러 핸들링 라우터가 된다.

```
app.use((err, req, res, next)=>{
	const err = new Error('user not found')
	err.statusCode = 404
	throw err
	})
```

## body-parser

> 요청의 바디를 해석해주는 미들웨어
>
> > 최신 버전부터는 express.json() 사용

## cookie-parser

> 쿠키를 해석해주는 미들웨어

## static

> 정적인 파일들을 제공해주는 미들웨어

## express-session

> 세션 관리용 미들웨어

## connect-flash

> 일회성 메시지들을 웹 브라우저에 나타낼때 사용되는 미들웨어

## http-errors

> http error를 생성해주는 미들웨어
