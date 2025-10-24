# linux package manager apt repository 추가

## add-apt-repository 를 사용하는 방법

```sh
add-apt-repository [options] repository # 명령어로 추가
```

## /etc/apt/sources.list 에 텍스트를 추가하는 방법

```sh
echo "deb https://apache.bintray.com/couchdb-deb $(lsb_release -cs) main" | sudo tee -a /etc/apt/sources.list
# "deb https://apache.bintray.com/couchdb-deb bionic main" 이 추가됨
```

## /etc/apt/sources.list.d 에 폴더를 추가하는 방법

```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
