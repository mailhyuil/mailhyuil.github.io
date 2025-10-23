# testing jest timer

```js
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("waits 1 second before ending the game", () => {
  const timerGame = require("../timerGame");
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
```
