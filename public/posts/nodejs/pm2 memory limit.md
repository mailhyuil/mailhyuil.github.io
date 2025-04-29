# pm2 memory limit

```js
module.exports = {
  apps: [
    {
      autorestart: true,
      max_memory_restart: "1G", // hard limit
      max_old_space_size: "512M", // soft limit
    },
  ],
};
```
