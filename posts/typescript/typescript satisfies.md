# typescript satisfies

> 미리 유효성 검사를 해주는 연산자
>
> > 기존에 if (typeof === 'type_name')로 검사를 해주었던 부분을 satisfies로 대체할 수 있음

```ts
type MyState = StateName | StateCordinates;
type StateName = "Seoul" | "Busan" | "Daegu" | "Incheon" | "Gwangju";
type StateCordinates = {
  x: number;
  y: number;
};

type User = {
  state: MyState;
};

const user = {
  state: "Seoul",
} satisfies User; // User의 타입을 사용해서 미리 유효성 검사를 한다. // prevalidating, pretypechecking

user.state.toUpperCase();

/* 원래 이렇게 해야하는것을 대체해준다.
 *
 * if(typeof user.state === 'string') {
 *   user.state.toUpperCase();
 * }
 *
 */
```
