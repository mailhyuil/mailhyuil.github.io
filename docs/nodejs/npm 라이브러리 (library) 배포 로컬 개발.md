# npm library 개발

1. library 배포 폴더를 npm link (e.g. npm link ./dist/ng-libs)
   > npm link를 사용하면 자동으로 global로 설치된다.
   > npm list -g 로 확인 가능
2. 개발용 workspace에서 npm link로 library를 연결 (e.g. npm link @mailhyuil/ng-libs)

3. 개발 진행

4. 개발이 끝나면 개발용 workspace에서 unlink (e.g. npm unlink @mailhyuil/ng-libs)

5. npm 배포 라이브러리로 다시 설치 (e.g. npm i @mailhyuil/ng-libs@latest)
