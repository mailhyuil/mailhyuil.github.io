# pnpm

> npm은 flatted dependency tree 전략을 사용한다. (모든 의존하는 패키지를 node_modules 내에 직접 설치한다.)
>
> > pnpm은 link 방식을 통해서 전역에 cache를 생성하고, 프로젝트의 node_modules는 이 cache를 참조한다.
> >
> > cache: `~/.pnpm-store`
> >
> > > disk space가 절약된다.

## install

```sh
npm install -g pnpm
```

## usage

```sh
pnpm install # npm install
pnpm add <package> # npm install <package>
pnpm add -D <package> # npm -D install <package>
pnpm remove <package> # npm uninstall <package>
pnpm <script> # npm run <script>
pnpm update # npm update
pnpm exec <command> # npx <command>
```
