# nx

## install

```sh
yarn add @nrwl/cli
yarn add @nrwl/angular
yarn add @nrwl/nest
```

## create project

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
