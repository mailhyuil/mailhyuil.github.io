# react base jsx & tsx

```jsx
export default function Counter() {
  const value = 0;

  const className = "text-2xl font-bold";

  function handleClick() {
    console.log("Hello World!");
  }

  return (
    <div className={className} onClick={handleClick}>
      {value}
    </div>
  );
}
```
