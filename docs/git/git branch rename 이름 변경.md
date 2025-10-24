# git branch rename 이름 변경

```sh
# 현재 브랜치 변경
git branch -m <newname>
# 브랜치 특정해서 변경
git branch -m <oldname> <newname>

# 브랜치 원격 레포지토리에 올리고
git push origin -u <newname>
# 기본 원격 레포지토리 제거
git push origin --delete <oldname>
```
