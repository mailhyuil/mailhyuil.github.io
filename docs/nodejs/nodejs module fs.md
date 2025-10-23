# nodejs fs

> 파일 입출력
>
> > 동기, 비동기 모두 지원
> >
> > > Sync가 붙은 메소드는 동기방식으로 작동 (메인 스레드를 블로킹하기 때문에 사용하지 말자)
> > >
> > > > Sync대신 그냥 메소드를 사용하고 뒤에 인자로 콜백함수를 넣어서 처리
> > > >
> > > > > fs/promises를 사용하면 promise를 리턴한다 (추천)

```js
fs.mkdir();
fs.mkdirSync();
fs.rmdir();
fs.rmdirSync();
fs.writeFile();
fs.writeFileSync();
fs.appendFile();
fs.appendFileSync();
fs.stat();
fs.statSync();

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
}); // 비동기 방식 콜백함수

let data = fs.readFileSync("./readme.md"); // 동기방식이니 요청이 많으면 성능문제가 생김
console.log(data);

// 두번째 인자로 인코딩 옵션 설정
fs.readFile("./readme.md", "utf-8", (err, data) => {
  console.log(data);
});
```

```js
fs.promises.readFile() // promise를 리턴 await를 사용할 때 사용
util.promisfy(fs.readFile)() 과 같다
```
