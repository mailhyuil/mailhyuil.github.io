# git 파일 삭제 bfg

## install

```sh
brew install bfg
```

## usage

```sh
# 1. 깃 히스토리 백업 (필수)
git clone --mirror https://github.com/your/repo.git
cd repo.git

# 2. .env.* 삭제
bfg --delete-files '.env.*'

# 3. 깃 정리
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 4. 강제 푸시
git push --force
```
