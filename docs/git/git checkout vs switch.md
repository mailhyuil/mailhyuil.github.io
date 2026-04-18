# git checkout vs switch

```sh
# 하나의 명령어에 여러 기능을 가지고 있다.
git checkout develop                 # develop 브랜치로 전환
git checkout -b new-feature          # 새 브랜치를 생성하고 그곳으로 전환
git checkout 5d3a123                 # 특정 커밋으로 HEAD를 이동
git checkout -- file.txt             # 특정 파일을 마지막 커밋 상태로 복원

# 오직 브랜치 전환에만 사용된다.
git switch develop                   # develop 브랜치로 전환
git switch -c new-feature            # 새 브랜치를 생성하고 그곳으로 전환
```
