# git feature branch

## workflow

```md
1. main 또는 develop 브랜치에서 feature 브랜치 생성 (git checkout -b feat/login)
2. feature 브랜치에서 작업 후 커밋 (git add . && git commit -m "feat: login 기능 추가")
3. feature 브랜치에서 원격 저장소로 푸시 (git push origin feat/login)
4. Pull Request 생성 후 코드 리뷰 및 병합
5. feature 브랜치 삭제 (git branch -d feat/login)
```
