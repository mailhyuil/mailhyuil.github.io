# CI/CD

> github actions, jenkins CI, travis CI

![](/img/cicd.png)

## github actions

```yml
# workflow의 이름
name: actions-name

# push 이벤트가 발생할 때마다 실행
on: push

permissions:
	contents: read

jobs:
	test:
		...
	build:
		# ubuntu-latest라는 플랫폼 위에서 실행
		runs-on: ubuntu-latest
		# steps: shell script or action 사용 가능
		steps:
		    - uses: actions/checkout@v3 # 누군가 만들어 놓은 action

		    - name: Set up JDK 11
		      uses: actions/setup-java@v3
		      with: # action에 값을 전달
		        java-version: '11'
		        distribution: 'temurin'

		    - name: Run chmod to make gradlew executable
		      run: chmod +x ./gradlew # shell script

		    - name: Build with Gradle
		      uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
		      with:
		        arguments: build
    deploy:
    	...

```

### Error Gradle Script ‘/Home/Runner/Work/\*/Gradlew’ Is Not Executable

- gradle 권한 부여

```
git update-index --chmod=+x gradlew
```

```
 - name: Run chmod to make gradlew executable
   run: chmod +x ./gradlew
```

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
