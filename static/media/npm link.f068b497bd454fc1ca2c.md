# npm link

> library를 개발할 때 library가 업데이트 될 때마다 다시 배포하고, main app에서 다시 설치하는 것이 번거롭다. 이런 경우 npm link를 사용하면 된다.
>
> > npm link는 package를 전역에 설치하고, main app에서 이 package를 참조한다.

```sh
# 설정
cd <package> # package로 이동
npm link # package를 전역에 설치
cd <main_app> # main app으로 이동
npm link <package> # package를 전역에 설치한 것을 참조

# 사용 후 해제
cd <main_app> # main app으로 이동
npm unlink --no-save <package> # package를 참조한 것을 해제
npm uninstall --no-save <package> # package를 전역에서 삭제
cd <package> # package로 이동
npm unlink # package를 전역에서 삭제
```
