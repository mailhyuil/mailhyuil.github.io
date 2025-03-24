# nodejs event-loop phase

1. timer
2. pending callbacks
3. idle, prepare
4. poll
   > network I/O 수행
5. check
6. close callbacks -> timer
