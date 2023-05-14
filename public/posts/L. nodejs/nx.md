# nx

> nx project에서는 npm 이나 nx 명령어만 사용
>
> > yarn 사용 불가

## install

```sh
npm install -g nx

npm i -g create-nx-workspace

yarn add @nrwl/cli -D
yarn add @nrwl/angular -D
yarn add @nrwl/nest -D
```

## create workspace

```
create-nx-workspace name
```

## create project

### using cli

```sh
# angular
nx g @nrwl/angular:app <프로젝트 이름>
# nestjs
nx g @nrwl/nest:app <프로젝트 이름>
```

### using NX Console

```
Add Dev Dependency -> @nrwl/angular, @nrwl/nest
generate -> @nrwl/angular - application
generate -> @nrwl/nest - application
```

## generate component

```sh
# angular
nx g c <컴포넌트 이름> --project=<프로젝트 이름> --standalone
# nestjs
nx g @nrwl/nest:app <프로젝트 이름>
```
