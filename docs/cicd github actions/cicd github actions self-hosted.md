# cicd github actions self-hosted

1. Self-hosted Runner로 등록하고자 하는 기기에서 폴더 생성

```sh
mkdir actions-runner && cd actions-runner
```

2. 가장 최신의 Runner 패키지 다운로드

```sh
curl -o actions-runner-osx-x64-2.295.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.295.0/actions-runner-osx-x64-2.295.0.tar.gz
```

3. 다운로드 받은 압축파일 압축해제

```sh
tar xzf ./actions-runner-osx-x64-2.295.0.tar.gz
```

4. 저장소 연결

> 토큰의 경우 개인 계정 Settings - Developer settings - Personal access tokens - Generate new token 에서 admin:enterprise - manage_runners:enterprise로 발급

```sh
./config.sh --url [저장소 주소] --token [토큰 값]
```

5. 정상적으로 github에 등록이 되면 github의 Runners에서도 목록을 확인할 수 있습니다.

6. 등록한 Self-hosted Runner를 활성화시키기 위해서는 해당 로컬 기기의 actions-runner 폴더에서 run.sh 프로그램을 실행시킵니다.

7. deploy.yaml 파일에서 원하는 dir(actions-runner 호스트가 배포 서버일 경우) 또는 node(배포 서버가 다른 호스트인 경우 scp & ssh 접속)에 빌드 파일을 위치시키고 실행
