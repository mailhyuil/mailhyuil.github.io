# Class & Getter, Setter

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
