# git stash

```sh
# 하던 작업을 임시로 stack 자료구조에 저장
git stash

# stash stack에 저장된 작업 목록 확인
git stash list

# 작업을 다시 불러온다
# stack에는 여전히 들어있다.
git stash apply [stash 이름]

# stack에 들어있는 stash를 제거한다
git drop [stash 이름]

# stack에 들어있는 stash를 가져오면서 제거한다.
git pop

# 실수로 stash 적용했을 때 되돌리기
git stash show -p | git apply -R
```
