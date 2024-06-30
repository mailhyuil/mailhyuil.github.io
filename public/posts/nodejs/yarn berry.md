# yarn berry

> node_modules를 사용하지 않는다.
>
> > 덕분에 빌드 시간이 단축된다. (yarn install을 할 필요가 없다)
> >
> > CI/CD 환경에서 node_modules를 다운로드할 필요가 없어 네트워크 사용량이 줄어든다.
> >
> > > PnP를 지원하지 않는 패키지가 하나라도 존재한다면 PnP 방식일지라도 node_modules가 따라온다
> > >
> > > > 단 .yarn/cache 압축파일이 git 저장소에 부하를 줄 수 있어서 commit이 많은 프로젝트에서 단점이 될 수 있다.

## install

```sh
# init
yarn init -2
## or
yarn set version berry
yarn init -y

# typescript 사용
yarn plugin import typescript
yarn add -D typescript
yarn dlx @yarnpkg/sdks vscode
```

## .yarn/cache

> ZipFS를 사용하여 패키지를 압축하여 캐싱한다.
