# go benchstat

> go test -bench 결과를 비교해서 속도 차이, 안정성 한눈에 보여줌
>
> > Go의 벤치마크 코드 최적화할 때 필수

```sh
go test -bench=. > old.txt
# 코드 수정 후
go test -bench=. > new.txt
# 비교!
benchstat old.txt new.txt
```
