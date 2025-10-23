# npm dependency & devDependency & peerDependency

## dependency

> 실제로 source code에서 사용하는 라이브러리

```sh
npm i <package-name> # dependency
```

## devDependency

> source code에는 사용되지 않고 개발에만 사용되는 라이브러리

```sh
npm i -D <package-name> # devDependency
```

## peerDependency

> 주로 라이브러리 내에서 사용하는 라이브러리를 peerDependency로 설정한다.
>
> > peerDependency로 설정된 라이브러리는 명시된 버전으로만 설치된다. (일반 dependency는 최신 버전을 )
> >
> > > 라이브러리는 내부적으로 사용하는 라이브러리의 버전이 맞지 않으면 에러가 발생할 수 있기 때문에 peerDependency로 설정한다.
> > >
> > > > 사용하고 있는 dependency와 peerDependency의 버전이 맞지 않으면 에러가 발생한다. (--force를 사용하면 설치가 가능하다.)

```sh
npm i -P <package-name> # peerDependency
```
