# lodash creation debounce & throttle

## debounce

> debounce 되는 함수를 반환

```js
import { debounce } from "lodash-es";

const calculateLayout = () => {
  console.log("layout calculated");
};

window.on("resize", debounce(calculateLayout, 150));

// cancel을 통해서 취소 가능
window.on("popstate", debounced.cancel);
```

## throttle

```js
import { throttle } from "lodash-es";

// Avoid excessively updating the position while scrolling.
window.on("scroll", throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
const throttled = throttle(renewToken, 300000, { trailing: false });
button.on("click", throttled);

// Cancel the trailing throttled invocation.
window.on("popstate", throttled.cancel);
```
