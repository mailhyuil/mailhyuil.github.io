# kubernetes expose

```sh
kubectl expose deployment my-deployment --name=my-lb-service --port=80 --target-port=80 --type=LoadBalancer
```
