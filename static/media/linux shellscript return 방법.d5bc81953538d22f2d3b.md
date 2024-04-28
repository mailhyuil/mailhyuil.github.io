# linux shellscript return 방법

```sh
#!/bin/bash
foo(){
    val="Hello World" # 변수에 값 할당
    echo ${val} # 변수 출력
}

returned=$(foo) # 함수 실행 후 반환값을 변수에 할당
# returned=`foo` # 이 방식도 가능

echo ${returned}
```
