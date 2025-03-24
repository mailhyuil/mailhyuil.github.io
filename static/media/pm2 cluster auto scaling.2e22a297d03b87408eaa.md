# pm2 auto scaling

> cpu 사용량에 따라 pm2 클러스터의 인스턴스를 자동으로 조정하는 방법
>
> > 단일 서버에서 실행할 것이기 때문에 memory 사용량 옵션은 없다.

```sh
pm2 install pm2-autoscale

pm2 set pm2-autoscale:debug true
pm2 set pm2-autoscale:scale_cpu_threshold 50
pm2 set pm2-autoscale:ignore_apps app1,app2
```

## ecosystem.config.js

```js
{
    "apps": [
        {
            "name": "testapp",
            "script": "build/app.js",
            "instances": "4",
            "autorestart": true,
            "watch": false,
            "max_memory_restart": "1024M",
            "vizion": false,
            "exec_mode": "cluster",
            "env": {
                "pm2_autoscale": {
                    "is_enabled": true,
                    "scale_cpu_threshold": 95,
                    "release_cpu_threshold": 50,
                    "max_workers": 5
                }
            }
        }
    ]
}
```
