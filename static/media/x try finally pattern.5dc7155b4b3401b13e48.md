# try finally pattern

> 반드시 성공하든 실패하든 반드시 처리해야하는 작업/리소스가 있을 때 사용

```ts
async function jobWithMutex() {
  const release = await mutex.acquire();
  try {
    await doSomthing();
  } finally {
    release();
  }
}
```
