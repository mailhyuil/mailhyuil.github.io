# typescript class get & set

> class는 자바스크립트 코드로 트랜스파일링 되기 때문에 용량을 차지한다 (type & interface는 런타임 동안 객체를 인스턴스화한다)

```ts
class MovieVO {
  private _title: string = "";

  get title(): string {
    console.log("I'm called!!");
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}

const vo = new MovieVO();

vo.title = "love and thunder";

console.log(vo.title);
```
