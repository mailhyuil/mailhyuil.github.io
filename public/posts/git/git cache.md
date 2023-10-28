# git cache

```sh
# 원격 저장소, 로컬 저장소 모두에서 삭제
git rm <file>
# 원격 저장소에서만 삭제
git rm --cached <file>
git rm -r --cached <directory>

```

# .gitignore 적용 안될 때

```sh
# 캐시를 모두 삭제
git rm -f --cached .
# 다시 추가하기
git add .
# 커밋
git commit -m "fixed untracked files"
```
