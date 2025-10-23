# path

> 운영체제별로 경로 구분자가 다르기 때문에 사용해야한다.
>
> > window: C:Users\Node...
> >
> > > unix: /home/Node...

## **filename & **dirname

### \_\_filename

> 현재 파일의 경로

### \_\_dirname

> 현재 폴더의 경로

## path.join

> 여러 경로를 하나의 경로로 합쳐준다.
>
> > window 유닉스 운영체제에 알맞는 구분자로 합쳐준다.

```js
path.join("app", "src", "index.js"); // /app/src/index.js
```

## path.resolve

> 맨 앞의 경로를 기준으로 찾는다.
>
> > 맨 앞의 인자에 cd 후 나머지 인자를 합쳐주는걸로 생각하면 된다.

```js
path.resolve("app", "src", "index.js"); // /src/index.js
path.resolve(__dirname, "src", "index.js"); // working dir을 기준으로 찾기.
```

## 그 밖의 기능

```js
path.sep; // 경로의 구분자 (e.g. window \ unix /)
path.delimiter; // 환경변수의 구분자 ex> window ; unix :
path.extname; // 확장자 표시
path.basename; // 두 번째 인수로 확장자를 보내면 파일의 이름만 출력
```
