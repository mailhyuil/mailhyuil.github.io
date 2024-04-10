# redis type Set usecase

## 좋아요 구현

```sh
users#32:likes

# 유저가 좋아요를 누른 item
SMEMBERS users#32:likes # items:1, items:2, items:3

# 좋아요를 누른 item의 개수
SCARD users#32:likes # 3

# 유저가 item에 좋아요를 눌렀는지 확인
SISMEMBER users#32:likes items:1 # 1

# 두 유저의 공통 좋아요 item
SINTER users#32:likes users#33:likes
```

## 순서가 상관없는 요소 리스트 구현

```sh
# domains:banned
ezmail.com
freemail.com
scammail.com
...

# emails:used
mailhyuil@gmail.com
yu0961@naver.com
...
```
