# npx

> 로컬 디렉토리의 node_modules를 찾아서 .bin 내의 커맨드 실행
>
> > node_modules가 없다면 전역 캐시에 설치하여 실행 후 cleanup

```sh
npx <command>
npx <command> --yarn

yarn dlx <command>

pnpm dlx <command>
pnpm exec <command>
pnpx <command>
```

## 동작

```txt
1. Checks for Local Installation
2. Executes if Found
3. Temporary Installation if not found
4. Runs the Command
5. Cleanup
```
