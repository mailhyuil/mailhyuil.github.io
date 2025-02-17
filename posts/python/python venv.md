# python venv

> npm의 node_modules처럼 python의 패키지들을 프로젝트별로 관리할 수 있는 가상환경을 만들어보자.
>
> > -m 옵션은 로컬의 모듈을 직접 실행할 때 사용한다.

```sh
python -m venv .venv

# activate venv
source .venv/bin/activate

# deactivate venv
deactivate

# install libs
python -m pip install flask
```
