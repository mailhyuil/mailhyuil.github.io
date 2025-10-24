# pm2 세팅 settings

```js
module.exports = {
  apps: [
    {
      name: "app-name",
      script: "main.js",
      exec_mode: "cluster",
      instances: "max", // number or "max"
      autorestart: true,
      max_memory_restart: "1GB", // 1GB Hard Limit
      max_old_space_size: "512", // 512MB Soft Limit

      watch: false,
      vizion: false,
    },
  ],
};
```
