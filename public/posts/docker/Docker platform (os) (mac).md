# docker platform (os)

> Docker는 컨테이너를 실행할 때, 호스트의 CPU 아키텍처에 맞는 이미지를 자동으로 선택하려고 함.
>
> > Mac의 CPU 아키텍처(Apple Silicon: ARM64)와 Docker 이미지의 기본 아키텍처(x86_64)가 다르기 때문에 일부 이미지를 실행할 때 문제가 발생할 수 있다.

```yaml
platform: linux/x86_64
```
