# cicd jenkins

> 설치 후 로그인
> 새로운 item -> Freestyle project -> GitHub project에 Project url 넣기
> GitHub hook trigger 설정 for GITScm polling
> Build Steps -> Execute shell 선택 후 shell script 입력
> github -> repository -> settings -> add service -> Jenkins 플러그인 설치

## docker jenkins

```sh
docker pull jenkins/jenkins
docker run -d -p 49001:8080 jenkins/jenkins

# Jenkins initial setup is required. An admin user has been created and a password generated.
# Please use the following password to proceed to installation:
# 1dcd4d46998d4298b58f59d79e449daf
# This may also be found at: /var/jenkins_home/secrets/initialAdminPassword

localhost:49001 접속 후 password 입력
```
