# docker logs error only

> 1은 stdout, 2는 stderr를 의미한다.
>
> > stdout을 /dev/null로 보내면 출력이 되지 않는다.

```sh
# error only
docker logs <container_name> -f 1> /dev/null
# access only
docker logs <container_name> -f 2> /dev/null

docker logs server --since 2024-06-23 --until 2024-06-24 1> /dev/null
```
