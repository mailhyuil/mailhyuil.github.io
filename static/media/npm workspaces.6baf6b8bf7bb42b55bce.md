# npm workspaces

> 의존성을 각 workspace에 추가할 수 있다.
>
> > npm v7부터 지원
> >
> > > workspace의 의존성은 기본으로 root node_modules에 설치된다.
> > >
> > > > root 와 workspace가 같은 의존석에 버전이 다르면 workspace에 따로 설치된다.
> > > >
> > > > > --install-strategy=nested 옵션을 사용하면 workspace만 설치할 수 있다.

# cmd

```sh
npm init -w packages/server
npm i express -w @myorg/server

# --install-strategy=nested 옵션을 사용하면 workspace에만 node_modules를 설치할 수 있다.
# 기본이 hosted 여서 기본으로 root에 설치된다.
npm i --install-strategy=nested -w @myorg/client
```

## package.json (root)

```json
{
  "name": "@myorg",
  "workspaces": ["packages/*"]
}
```

## package.json (/packages/client)

```json
{
  "name": "@myorg/client"
}
```
