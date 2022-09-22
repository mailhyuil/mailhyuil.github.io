# CI/CD
> github actions, jenkins CI, travis CI

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

### Error Gradle Script ‘/Home/Runner/Work/*/Gradlew’ Is Not Executable

- gradle 권한 부여
```
git update-index --chmod=+x gradlew
```

```
 - name: Run chmod to make gradlew executable
   run: chmod +x ./gradlew
```