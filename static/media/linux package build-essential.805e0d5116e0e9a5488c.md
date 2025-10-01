# linux package build-essential

```sh
apt install build-essential libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev -y
# build-essential # gcc g++ make 등 빌드 도구
# libpcre3 # PCRE (Perl Compatible Regular Expressions) 라이브러리의 런타임 파일을 제공
           # PCRE는 정규 표현식을 지원하는 라이브러리로, Nginx와 같은 프로그램에서 문자열 매칭 및 처리에 사용됩니다.
# libpcre3-dev # PCRE 라이브러리의 개발 파일을 제공합니다.
# zlib1g # zlib 압축 라이브러리의 런타임 파일을 제공합니다.
# zlib1g-dev # zlib 라이브러리의 개발 파일을 제공합니다.
# libssl-dev # OpenSSL 암호 라이브러리의 개발 파일을 제공합니다.

apt install cmake ninja-build
```
