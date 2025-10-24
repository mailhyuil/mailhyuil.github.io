# x Delegation Pattern

> The delegate (host/delegating object) is a helper object, but with the original context.
>
> > kotlin 같은 몇몇 언어에서는 built-in으로 지원하는 패턴이다.

```ts
class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Box {
  private bounds: Rectangle;
  constructor(bounds: Rectangle) {
    this.bounds = bounds;
  }
  area() {
    return this.bounds.area();
  }
}

const rect = new Rectangle(10, 20);
const box = new Box(rect);
console.log(box.area()); // 200
```

## kotlin

```kotlin
interface ClosedShape {
    fun area(): Int
}

class Rectangle(val width: Int, val height: Int) : ClosedShape {
    override fun area() = width * height
}

// The ClosedShape implementation of Window delegates to that of the Rectangle that is bounds
class Window(private val bounds: Rectangle) : ClosedShape by bounds
```
