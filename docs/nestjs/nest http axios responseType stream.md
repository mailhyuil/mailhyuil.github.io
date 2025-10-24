# nest http axios responseType stream

> response.data는 ReadableStream이다.

```ts
this.http
  .get(file.url, {
    responseType: "stream",
  })
  .subscribe({
    next: (response) => {
      // response.data는 ReadableStream
      archive.append(response.data, { name: file.name });
      resolve();
    },
    error: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        reject(new Error(message));
      }
      reject(error);
    },
  });
```
