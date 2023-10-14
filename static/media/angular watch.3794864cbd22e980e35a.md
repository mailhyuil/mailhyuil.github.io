# watch

> rxjs Subject를 사용

```ts
export class SomeComponent {
  private myData = new Subject<any>();
  constructor() {
    this.myData.subscribe((data) => {
      console.log("New data:", data);
    });
  }
  handleSome() {
    this.myData.next("Hello, world!");
  }
}
```
