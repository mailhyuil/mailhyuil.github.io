# html canvas transformation

## save() & restore()

> p5js의 pop() push()와 같다

```js
scale();
rotate();
translate();
transform();
setTransform();
```

## transformation reset

```
// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```
