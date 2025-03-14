# linux shellscript 변수 ${}

> 기능상 똑같음
>
> > 좌우로 다른 문자가 붙었을 때 명확하게 변수의 범위를 지정할 때 사용

```sh
USERNAME="hyuil"

echo $USERNAME # hyuil
echo ${USERNAME} # hyuil

echo $USERNAME_IS_A_CAT # hyuil_IS_A_CAT
echo ${USERNAME}_IS_A_CAT # hyuil_IS_A_CAT
echo ${USERNAME}이 바보 # hyuil이 바보
echo "${USERNAME}이 바보" # hyuil이 바보
```

## default value

> ${KEY:-VALUE}

```sh
echo ${USERNAME:-"default_name"} # USERNAME이 없으면 default 출력
```
