# pm2 memory limit

```js
module.exports = {
  apps: [
    {
      max_memory_restart: "300M", // 300M가 되면 다시 실행
      max_old_space_size: "1GB", // 1GB가 되면 가비지 컬렉터를 실행
    },
  ],
};
```
