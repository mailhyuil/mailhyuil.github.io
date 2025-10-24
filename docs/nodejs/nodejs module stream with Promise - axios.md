# nodejs module stream with Promise - axios

```ts
const promise = new Promise<void>((resolve, reject) => {
  this.http
    .get(file.url, {
      responseType: "stream",
    })
    .subscribe({
      next: response => {
        if (response.data instanceof internal.Readable) {
          response.data.on("end", resolve);
          archive.append(response.data, { name: file.name }).on("error", reject);
        }
      },
    });
});
// promise에 await를 걸지 말 것
promise.then(() => {
  // finalize
});
```
