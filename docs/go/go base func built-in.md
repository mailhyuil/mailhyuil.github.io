# go base func built-in

> built-in 함수들은 오버라이딩할 수 없음

```go
make() // slice, map, channel을 생성할 때 사용
new() // struct를 생성할 때 사용 (pointer로 리턴)

append(slice, elements...) // slice에 원소를 추가할 때 사용
copy(targetSlice, originSlice) // slice를 복사할 때 사용 (깊은 복사)
len(slice) // slice의 길이 리턴
cap(slice) // slice의 뒤에 더 넣을 수 있는 공간을 리턴

delete(map, key) // map에서 원소를 삭제할 때 사용

close(chan) // channel을 닫을 때 사용

panic() // 에러를 발생시킬 때 사용
recover() // panic을 복구할 때 사용

complex() // 복소수 생성
real() // 실수 부분 추출
imag() // 허수 부분 추출

// console.log용 log나 fmt 사용을 권장
println()
print()
```
