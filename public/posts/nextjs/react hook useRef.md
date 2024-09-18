# react hook useRef

> element의 참조를 저장할 수 있는 hook
>
> > react의 forwardRef 함수를 사용한다.

```ts
export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```
