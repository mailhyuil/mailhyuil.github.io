# git 파일 삭제 git-filter-repo

## install

```sh
brew install git-filter-repo
```

## usage

```sh
git filter-repo --path-glob '.env.*' --invert-paths

git remote set-url origin https://github.com/your/repo.git
git push --force --all
git push --force --tags
```
