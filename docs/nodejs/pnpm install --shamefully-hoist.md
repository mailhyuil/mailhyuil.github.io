# pnpm install --shamefully-hoist

> node_modules를 flat하게 설치하는 옵션
>
> > pnpm의 기본 설치 방식은 node_modules를 계층적으로 설치하는 방식입니다. 하지만 일부 패키지들은 flat한 구조를 필요로 하거나, 기존의 npm/yarn과 호환성을 유지하기 위해 flat한 구조를 요구합니다. 이럴 때 `--shamefully-hoist` 옵션을 사용하면, pnpm이 모든 의존성을 최상위 node_modules 폴더에 설치하여 flat한 구조를 만듭니다.

```sh
pnpm install --shamefully-hoist --production
```
