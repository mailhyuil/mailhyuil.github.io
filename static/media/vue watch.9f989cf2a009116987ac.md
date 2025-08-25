# vue watch

## single ref

> Do note that you can't watch a property of a reactive object

```
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})
```

## getter

> Instead, use a getter

```
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)
```

## stopping watch

```
import { watchEffect } from 'vue'

// this one will be automatically stopped
watchEffect(() => {})

// ...this one will not!
setTimeout(() => {
  watchEffect(() => {})
}, 100)
```

```
const unwatch = watchEffect(() => {})

// ...later, when no longer needed
unwatch()
```
