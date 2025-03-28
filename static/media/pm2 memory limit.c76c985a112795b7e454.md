# pm2 memory limit

```js
module.exports = {
  apps: [
    {
      autorestart: true,
      max_memory_restart: "1GB", // 1GB Hard Limit
      max_old_space_size: "512", // 512MB Soft Limit
    },
  ],
};
```
