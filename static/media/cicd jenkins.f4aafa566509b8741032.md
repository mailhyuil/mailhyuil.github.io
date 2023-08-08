## Jenkins

### docker jenkins

1. jenkins container

```shell
docker pull jenkins/jenkins

docker run -d -p 49001:8080 jenkins/jenkins
```

2. localhost:49001 접속 후 password 입력

```
Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

1dcd4d46998d4298b58f59d79e449daf

This may also be found at: /var/jenkins_home/secrets/initialAdminPassword
```

3. 플러그인 설치 후 로그인

4. 새로운 item -> Freestyle project -> GitHub project에 Project url 넣기

5. 빌드 유발 GitHub hook trigger for GITScm polling

6. Build Steps -> Execute shell 선택 후 shell script 입력

7. github repository -> settings -> add service -> Jenkins 플러그인 설치
