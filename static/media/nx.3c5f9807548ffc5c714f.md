# nx

## install

```sh
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

## using NX Console

```
Add Dev Dependency -> @nrwl/angular, @nrwl/nest
generate -> @nrwl/angular - application
generate -> @nrwl/nest - application
```

## using cli

```sh
# angular
nx g @nrwl/angular:app <프로젝트 이름>
# tailwindcss
npx nx g @nrwl/angular:setup-tailwind <angular 프로젝트 이름>
# nestjs
nx g @nrwl/nest:app <프로젝트 이름>
```

## generate component

```sh
# angular
nx g c <컴포넌트 이름> —project=<프로젝트 이름> —standalone
# nestjs
nx g @nrwl/nest:app <프로젝트 이름>
```
