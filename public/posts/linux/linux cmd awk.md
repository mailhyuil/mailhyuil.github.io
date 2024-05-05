# linux cmd awk

> 파일로부터 레코드(record)를 선택하고, 선택된 레코드에 포함된 값을 조작하거나 데이터화하는 것을 목적
>
> > grep 보다 정교한 작업 (e.g. 마지막 줄 DELETE만 제거..)

```sh
awk '{print $1}' file.txt # file.txt의 첫번째 열 출력
awk '{print $1, $2}' file.txt # file.txt의 첫번째, 두번째 열 출력
awk '{print $1 $2}' file.txt # file.txt의 첫번째, 두번째 열을 붙여서 출력
awk '{print $1, $2, $3}' file.txt # file.txt의 첫번째, 두번째, 세번째 열 출력
awk '{print $1, $2, $3, $4}' file.txt # file.txt의 첫번째, 두번째, 세번째, 네번째 열 출력
```
