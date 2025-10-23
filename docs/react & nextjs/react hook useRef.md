# react hook useRef

> element의 참조를 저장할 수 있는 hook
>
> > react의 forwardRef 함수를 사용한다.
> >
> > > current는 nativeElement를 가리키고, ref는 DOM을 가리킨다.

```ts
export default function Counter() {
  const ref = useRef(0);
  const refs = useRef([]);
  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return (
    <>
      <div onClick={handleClick}>Click me!</div>
      {arr.map((_, i) => (
        <div key={i} ref={el => (refs.current[i] = el)}>
          {i}
        </div>
      ))}
    </>
  );
}
```
