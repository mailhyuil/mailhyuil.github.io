# git hooks Husky

> git hooks를 관리하기 위한 npm package

## install

```sh
npm i -D husky # Git hooks 관리 도구
npm i -D lint-staged # staged 파일들에만 작업 수행 (속도 개선)

npx husky install
npm pkg set scripts.prepare="husky install"
```

## usage

```sh
# pre-commit hook 생성
npx husky add .husky/pre-commit "npm test"

# pre-push hook 생성
npx husky add .husky/pre-push "npm run build"

# commit-msg hook 생성
npx husky add .husky/commit-msg "npx commitlint --edit \$1"
```
