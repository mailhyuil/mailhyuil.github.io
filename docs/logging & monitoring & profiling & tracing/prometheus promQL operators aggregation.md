# prometheus promQL operators aggregation

```sh
sum(node_memory_MemTotal_bytes)
min(node_memory_MemTotal_bytes)
max(node_memory_MemTotal_bytes)
avg(node_memory_MemTotal_bytes)
stddev(node_memory_MemTotal_bytes)
stdvar(node_memory_MemTotal_bytes)
count(node_memory_MemTotal_bytes)
count_values("handler", node_memory_MemTotal_bytes)
bottomk(5, node_memory_MemTotal_bytes)
topk(5, node_memory_MemTotal_bytes)
quantile(0.5, node_memory_MemTotal_bytes)
```
