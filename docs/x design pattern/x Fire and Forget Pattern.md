# Fire and Forget Pattern

The Fire and Forget pattern is a design pattern used in software development where a task is initiated and the system does not wait for its completion before proceeding with other operations. This pattern is particularly useful in scenarios where the outcome of the task is not immediately needed, allowing for improved performance and responsiveness.

```ts
async function schedule() {}
async function main() {
  try {
    await schedule(); // await를 반드시 붙여야 한다.
    scheduleAsync();
  } catch (error) {
    console.error("Error scheduling task:", error);
  }
}
```
