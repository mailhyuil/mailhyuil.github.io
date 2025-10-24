# npm 라이브러리 - library 배포 link & pack & install

> library를 개발할 때 library가 업데이트 될 때마다 다시 배포하고, main app에서 다시 설치하는 것이 번거롭다. 이런 경우 npm link를 사용하면 된다.
>
> > npm link는 package를 전역에 설치하고, main app에서 이 package를 참조한다.

## link

```sh
# link & unlink
npm link <package_directory>
npm unlink <package_directory>

# global link 추가
# 1. 해당 패키지에서 실행
npm link
npm unlink
# 2. 패키지를 사용하는 workspace에서 실행
npm link <package_name>
npm unlink <package_name>

# package directory를 직접 링크로 지정
pnpm link <package_directory>
pnpm unlink <package_directory>

# global link로 추가
# 1. 해당 패키지에서 실행
pnpm link
pnpm unlink
# 2. 패키지를 사용하는 workspace에서 실행
pnpm link <package_name>
pnpm unlink <package_name>
```

## pack & install

> tarball로 패키지를 만들어서 사용하는 방법

```sh
# 해당 패키지에서
npm pack
# 해당 패키지를 사용하는 workspace에서
npm install <package_directory>/<package_name>-<version>.tgz
```
